import Sequelize from "sequelize";
import databaseConfig from "../configs/database";
import Cliente from "../models/Cliente";
import Produto from "../models/Produto";

const models = [Cliente, Produto];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
