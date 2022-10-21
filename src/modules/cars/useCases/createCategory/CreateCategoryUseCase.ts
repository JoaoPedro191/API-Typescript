import { CategoriesRepositories } from "../../repositories/implementations/categoriesRespository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRespository: CategoriesRepositories) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const category = await this.categoriesRespository.findByName(name);
    if (category) {
      throw new Error("Category already exist");
    }
    this.categoriesRespository.create({ name, description });
  }
}
export { CreateCategoryUseCase };
