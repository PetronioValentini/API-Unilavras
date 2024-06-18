import Sequelize from "sequelize";
import databaseConfig from "../configs/database";
import Cliente from "../models/Cliente";
import Produto from "../models/Produto";
import Usuario from "../models/Usuario";

const models = [Cliente, Produto, Usuario];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
