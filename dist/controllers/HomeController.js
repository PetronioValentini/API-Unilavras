"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ClienteService = require('../services/ClienteService'); var _ClienteService2 = _interopRequireDefault(_ClienteService);
var _ProdutoService = require('../services/ProdutoService'); var _ProdutoService2 = _interopRequireDefault(_ProdutoService);

class HomeController {
  async index(req, res) {
    try {
      const clientes = await _ClienteService2.default.listarClientes();
      const produtos = await _ProdutoService2.default.listarProdutos();
      return res.json({ clientes, produtos });
    } catch (e) {
      return res.status(500).json({ e: "Erro interno do servidor" });
    }
  }
}

exports. default = new HomeController();
