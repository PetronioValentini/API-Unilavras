import Sequelize, { Model } from "sequelize";

export default class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo nome está vazio",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo sobrenome está vazio",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já registrado",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo idade não pode estar vazio",
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
