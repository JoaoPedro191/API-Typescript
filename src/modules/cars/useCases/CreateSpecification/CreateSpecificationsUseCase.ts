import { ISpecificationRespository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specification: ISpecificationRespository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExist = this.specification.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error("Specification Already Exist");
    }

    this.specification.create({ name, description });
  }
}
export { CreateSpecificationUseCase };
