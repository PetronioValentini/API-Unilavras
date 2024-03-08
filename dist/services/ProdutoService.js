"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Produto = require('../models/Produto'); var _Produto2 = _interopRequireDefault(_Produto);

class ProdutoService {
  async criarProduto(dadosProduto) {
    try {
      const novoProduto = await _Produto2.default.create(dadosProduto);
      return novoProduto;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async listarProdutos() {
    try {
      const produtos = await _Produto2.default.findAll();
      return produtos;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async buscarProdutoPorId(id) {
    try {
      const produto = await _Produto2.default.findByPk(id);
      return produto;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async atualizarProduto(id, dadosAtualizados) {
    try {
      const produto = await _Produto2.default.findByPk(id);
      if (!produto) {
        throw new Error("Produto não encontrado");
      }
      const produtoAtualizado = await produto.update(dadosAtualizados);
      return produtoAtualizado;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async deletarProduto(id) {
    try {
      const produto = await _Produto2.default.findByPk(id);
      if (!produto) {
        throw new Error("Produto não encontrado");
      }
      await produto.destroy();
      return "Produto deletado com sucesso!";
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

exports. default = new ProdutoService();
