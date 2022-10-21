import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController} from "../ListSpecifications/ListSpecificationsController";

const specificationsRepository = new SpecificationsRepository();
const listCategoriesUseCase = new  ListSpecificationsUseCase(specificationsRepository);
const listSpecificationsController = new ListSpecificationsController(listCategoriesUseCase);

export { listSpecificationsController }