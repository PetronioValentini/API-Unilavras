import Sequelize, { Model } from "sequelize";

export default class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Produto já registrado",
          },
          validate: {
            notEmpty: {
              msg: "Campo nome está vazio",
            },
          },
        },
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo descricao está vazio",
            },
          },
        },
        preco: {
          type: Sequelize.DECIMAL(10, 2),
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo preco não pode estar vazio",
            },
            min: {
              args: [0],
              msg: "Preco precisa ser positivo",
            },
          },
        },
      },
      {
        sequelize,
        timestamps: true,
      },
    );
    return this;
  }
}
