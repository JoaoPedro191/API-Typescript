import { Request, Response } from "express";
import { ImportCategoryUseCase } from "../importCategory/ImportCategoryUseCase";
class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoryUseCase.execute(file);
    return response.send("deu tudo certo no upload");
  }
}

export { ImportCategoryController };
