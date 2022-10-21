import express from "express";
import swaggerUi from "swagger-ui-express";
import { categoriesRoutes } from "../src/modules/cars/routes/categories.routes";
import { specificationsRoutes } from "../src/modules/cars/routes/Specifications.routes";
import swaggerFile from "./swagger.json";
import "./database";

const app = express();

app.use(express.json());
app.use(categoriesRoutes);
app.use(specificationsRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => {
  console.log("porta está rodando na porta 3333");
});
