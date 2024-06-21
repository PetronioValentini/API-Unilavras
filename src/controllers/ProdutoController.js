import ProdutoService from "../services/ProdutoService";

class ProdutoController {
  async store(req, res) {
    try {
      const novoProduto = await ProdutoService.criarProduto(req.body);
      return res.status(201).json(novoProduto);
    } catch (e) {
      const errors = e.message.split("\n");
      return res.status(400).json({ errors });
    }
  }

  async index(req, res) {
    try {
      const produtos = await ProdutoService.listarProdutos();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const produto = await ProdutoService.buscarProdutoPorId(id);
      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      const produto = await ProdutoService.atualizarProduto(id, req.body);
      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      return res.json(produto);
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await ProdutoService.deletarProduto(id);
      return res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: "Produto não encontrado" });
    }
  }
}

export default new ProdutoController();
