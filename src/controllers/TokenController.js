// import Usuario from "../models/Usuario";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";

class TokenController {
  async store(req, res) {
    const { usuario = "", senha = "" } = req.body;

    if (!usuario || !senha) {
      return res.status(401).json({
        errors: ["Valores invalidos"],
      });
    }

    const user = await Usuario.findOne({ where: { usuario } });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuario nao existe"],
      });
    }

    if (senha !== user.senha) {
      return res.status(401).json({
        erorrs: ["Senha ou usuario incorretooo"],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, usuario }, " ", {
      expiresIn: 30,
    });

    user.token = token;
    await user.save();

    return res.json({ token });
  }
}

export default new TokenController();
