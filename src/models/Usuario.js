import Sequelize, { Model } from "sequelize";

export default class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo usuario está vazio",
            },
          },
        },
        senha: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo senha está vazio",
            },
          },
        },
        token: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
