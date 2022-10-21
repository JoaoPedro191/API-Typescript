import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class ISpecificationRespository {
  create({ name, description }: ICreateSpecificationDTO): void {}

  list() {}

  findByName(name: string) {}
}

export { ISpecificationRespository, ICreateSpecificationDTO };
