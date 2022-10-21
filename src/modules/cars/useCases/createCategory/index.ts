import { CategoriesRepositories } from "../../repositories/implementations/categoriesRespository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const categoriesRespository = new CategoriesRepositories();
  const createCategoryUseCase = new CreateCategoryUseCase(
    categoriesRespository
  );
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );
  return createCategoryController;
};
