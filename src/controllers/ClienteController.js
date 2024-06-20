import ClienteService from "../services/ClienteService";

class ClienteController {
  // STORE
  async store(req, res) {
    try {
      const novoCliente = await ClienteService.criarCliente(req.body);
      return res.status(201).json(novoCliente);
    } catch (e) {
      const errors = e.message.split("\n");
      return res.status(400).json({ errors });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const clientes = await ClienteService.listarClientes();
      return res.json(clientes);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const { id } = req.params;
      const cliente = await ClienteService.buscarClientePorId(id);
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
      const cliente = await ClienteService.atualizarCliente(id, req.body);
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
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await ClienteService.deletarCliente(id);
      return res.status(200).json({ message: "Cliente deletado com sucesso!" });
    } catch (e) {
      return res.status(500).json({ error: "Cliente não encontrado" });
    } finally {
      next();
    }
  }
}

export default new ClienteController();
