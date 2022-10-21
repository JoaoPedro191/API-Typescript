import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRespository,
} from "../../repositories/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRespository {
  constructor(private specifications: Specification[] = []) {}

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (especification) => especification.name === name
    );
    return specification;
  }
}
export { SpecificationsRepository };
