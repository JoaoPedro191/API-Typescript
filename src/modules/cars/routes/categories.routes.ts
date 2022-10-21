import { Router } from "express";
import multer from "multer";
// import { Category } from "../model/Category";
import createCategoryController from "../useCases/createCategory";
import { listCategoriesController } from "../useCases/ListCategories";
import { importCategoryController } from "../useCases/importCategory/index";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/categories", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/categories", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
