import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private SpecificationsRepository: SpecificationsRepository) {}
  execute() {
    const listSpecifications = this.SpecificationsRepository.list();
    return listSpecifications;
  }
}
export { ListSpecificationsUseCase };
