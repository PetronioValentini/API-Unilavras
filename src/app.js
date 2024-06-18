import dotenv from "dotenv";

dotenv.config();

import "./database";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import NodeCache from "node-cache";
import clienteRoutes from "./routes/clienteRoutes";
import produtoRoutes from "./routes/produtoRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import { cacheMiddleware } from "./middlewares/cacheMiddleware";

class App {
  constructor() {
    this.app = express();
    this.cache = new NodeCache({ stdTTL: 30, checkperiod: 60 });
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cacheMiddleware);
  }

  routes() {
    this.app.use("/clientes/", clienteRoutes);
    this.app.use("/produtos/", produtoRoutes);
    this.app.use("/usuarios/", usuarioRoutes);
    this.app.use("/tokens/", tokenRoutes);
  }
}

export default new App().app;
