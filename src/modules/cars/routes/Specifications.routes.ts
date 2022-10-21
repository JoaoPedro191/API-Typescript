import { Router } from "express";
import { createSpecificationControler } from "../useCases/CreateSpecification/index";
import { listCategoriesController } from "../useCases/ListCategories";

const specificationsRoutes = Router();
specificationsRoutes.post("/specifications", (request, response) => {
  return createSpecificationControler.handle(request, response);
});

specificationsRoutes.get("/specifications", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { specificationsRoutes };
