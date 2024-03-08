import Cliente from "../models/Cliente";

class ClienteService {
  async criarCliente(dadosCliente) {
    try {
      const novoCliente = await Cliente.create(dadosCliente);
      return novoCliente;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async listarClientes() {
    try {
      return Cliente.findAll();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async buscarClientePorId(id) {
    return Cliente.findByPk(id);
  }

  async atualizarCliente(id, dadosAtualizados) {
    try {
      const cliente = await Cliente.findByPk(id);
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
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
    return "Cliente deletado com sucesso!";
  }
}

export default new ClienteService();
