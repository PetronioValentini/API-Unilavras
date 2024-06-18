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
            min: {
              args: [0],
              msg: "Idade deve ser um numero positivo",
            },
            max: {
              args: [120],
              msg: "Idade deve ser menor que 120",
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
