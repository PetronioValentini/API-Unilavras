"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import Cliente from "../models/Cliente";
var _ClienteService = require('../services/ClienteService'); var _ClienteService2 = _interopRequireDefault(_ClienteService);

class ClienteController {
  // STORE
  async store(req, res) {
    try {
      const novoCliente = await _ClienteService2.default.criarCliente(req.body);
      return res.json(novoCliente);
    } catch (e) {
      const errors = e.message.split("\n");
      return res.status(400).json({ errors });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const clientes = await _ClienteService2.default.listarClientes();
      return res.json(clientes);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const { id } = req.params;
      const cliente = await _ClienteService2.default.buscarClientePorId(id);
      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }
      return res.json(cliente);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      const cliente = await _ClienteService2.default.atualizarCliente(id, req.body);
      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }
      return res.json(cliente);
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const { id } = req.params;
      await _ClienteService2.default.deletarCliente(id);
      return res.json("Cliente deletado com sucesso!");
    } catch (e) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
  }
}

exports. default = new ClienteController();
