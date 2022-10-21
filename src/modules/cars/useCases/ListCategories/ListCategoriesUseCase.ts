import { CategoriesRepositories } from "../../repositories/implementations/categoriesRespository";

class ListCategoriesUseCase {
  constructor(private CategoriesRepositories: CategoriesRepositories) {}
  execute() {
    const categories = this.CategoriesRepositories.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
