import Usuario from "../models/Usuario";

class UsuarioService {
  async criarUsuario(dadosUsuario) {
    try {
      const novoUsuario = await Usuario.create(dadosUsuario);
      return novoUsuario;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async listarUsuarios() {
    try {
      return Usuario.findAll();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async buscarUsuarioPorId(id) {
    return Usuario.findByPk(id);
  }

  async atualizarUsuario(id, dadosAtualizados) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      throw new Error("Usuario não encontrado");
    }
    // Atualizando o usuario com os novos dados
    await usuario.update(dadosAtualizados);
    return usuario;
  }

  async deletarUsuario(id) {
    const usuario = await Usuario.findByPk(id);
    await usuario.destroy();
    return "Usuario deletado com sucesso!";
  }
}

export default new UsuarioService();
