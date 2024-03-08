import dotenv from "dotenv";

dotenv.config();

import "./database";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import clienteRoutes from "./routes/clienteRoutes";
import produtoRoutes from "./routes/produtoRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/clientes/", clienteRoutes);
    this.app.use("/produtos/", produtoRoutes);
  }
}

export default new App().app;
