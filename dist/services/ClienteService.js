"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Cliente = require('../models/Cliente'); var _Cliente2 = _interopRequireDefault(_Cliente);

class ClienteService {
  async criarCliente(dadosCliente) {
    try {
      const novoCliente = await _Cliente2.default.create(dadosCliente);
      return novoCliente;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async listarClientes() {
    try {
      return _Cliente2.default.findAll();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async buscarClientePorId(id) {
    return _Cliente2.default.findByPk(id);
  }

  async atualizarCliente(id, dadosAtualizados) {
    try {
      const cliente = await _Cliente2.default.findByPk(id);
      if (!cliente) {
        throw new Error("Cliente não encontrado");
      }
      // Atualizando o cliente com os novos dados
      await cliente.update(dadosAtualizados);
      return cliente;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async deletarCliente(id) {
    const cliente = await _Cliente2.default.findByPk(id);
    await cliente.destroy();
    return "Cliente deletado com sucesso!";
  }
}

exports. default = new ClienteService();
