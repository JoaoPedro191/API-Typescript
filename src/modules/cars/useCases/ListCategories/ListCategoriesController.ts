import { Request, Response } from "express";
import { ListCategoriesUseCase } from "../ListCategories/ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response) {
    const all = this.ListCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
