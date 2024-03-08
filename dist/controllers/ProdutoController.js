"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ProdutoService = require('../services/ProdutoService'); var _ProdutoService2 = _interopRequireDefault(_ProdutoService);

class ProdutoController {
  async store(req, res) {
    try {
      const novoProduto = await _ProdutoService2.default.criarProduto(req.body);
      return res.json(novoProduto);
    } catch (e) {
      const errors = e.message.split("\n");
      return res.status(400).json({ errors });
    }
  }

  async index(req, res) {
    try {
      const produtos = await _ProdutoService2.default.listarProdutos();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const produto = await _ProdutoService2.default.buscarProdutoPorId(id);
      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const produtoAtualizado = await _ProdutoService2.default.atualizarProduto(id, req.body);
      return res.json(produtoAtualizado);
    } catch (error) {
      return res.status(400).json({ errors: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await _ProdutoService2.default.deletarProduto(id);
      return res.json("Produto deletado com sucesso!");
    } catch (error) {
      return res.status(500).json({ error: "Produto não encontrado" });
    }
  }
}

exports. default = new ProdutoController();
