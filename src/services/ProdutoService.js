import Produto from "../models/Produto";

class ProdutoService {
  async criarProduto(dadosProduto) {
    try {
      const novoProduto = await Produto.create(dadosProduto);
      return novoProduto;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async listarProdutos() {
    try {
      const produtos = await Produto.findAll();
      return produtos;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async buscarProdutoPorId(id) {
    try {
      const produto = await Produto.findByPk(id);
      return produto;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async atualizarProduto(id, dadosAtualizados) {
    try {
      const produto = await Produto.findByPk(id);
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
      const produto = await Produto.findByPk(id);
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

export default new ProdutoService();
