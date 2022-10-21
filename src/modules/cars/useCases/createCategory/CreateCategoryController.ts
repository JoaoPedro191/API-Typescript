import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    // const createCategoryService = new CreateCategoryService(categoriesRespository)
    await this.createCategoryUseCase.execute({ name, description });
    // 1 forma de poder atribuir os valores dentro do objeto.
    // category.name = name
    // category.description = description`
    // category.created_at = new Date()
    return response.status(201).send("tudo certo"); // Status que define, quando algo foi criado
  }
}

export { CreateCategoryController };
