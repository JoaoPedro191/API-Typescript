import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "../../useCases/ListSpecifications/ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private  ListSpecificationsUseCase : ListSpecificationsUseCase){}
  handle(request: Request , response: Response) {
     return this.ListSpecificationsUseCase.execute();
  }
};

export { ListSpecificationsController };