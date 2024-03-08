"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Cliente extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo nome está vazio",
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo sobrenome está vazio",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
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
} exports.default = Cliente;
