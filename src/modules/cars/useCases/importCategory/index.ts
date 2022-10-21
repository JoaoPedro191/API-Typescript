import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "../importCategory/ImportCategoryUseCase";
import { CategoriesRepositories } from "../../repositories/implementations/categoriesRespository";

const categoriesRespository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRespository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
