"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Produto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo descricao está vazio",
            },
          },
        },
        preco: {
          type: _sequelize2.default.DECIMAL(10, 2),
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo preco não pode estar vazio",
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
} exports.default = Produto;
