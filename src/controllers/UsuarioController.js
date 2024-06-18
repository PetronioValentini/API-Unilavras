// import Usuario from "../models/Usuario";
import UsuarioService from "../services/UsuarioService";

class UsuarioController {
  // STORE
  async store(req, res) {
    try {
      const novoUsuario = await UsuarioService.criarUsuario(req.body);
      return res.json(novoUsuario);
    } catch (e) {
      const errors = e.message.split("\n");
      return res.status(400).json({ errors });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const usuarios = await UsuarioService.listarUsuarios();
      return res.json(usuarios);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await UsuarioService.buscarUsuarioPorId(id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario não encontrado" });
      }
      return res.json(usuario);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const { id } = req.params;
      const usuario = await UsuarioService.atualizarUsuario(id, req.body);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario não encontrado" });
      }
      return res.json(usuario);
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
      await UsuarioService.deletarUsuario(id);
      return res.json("Usuario deletado com sucesso!");
    } catch (e) {
      return res.status(404).json({ error: "Usuario não encontrado" });
    } finally {
      next();
    }
  }
}

export default new UsuarioController();
