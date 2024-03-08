"use strict";Object.defineProperty(exports, "__esModule", {value: true});const senhaUnica = process.env.SENHA_API;

function verificarSenhaUnica(req, res, next) {
  const { senha } = req.body;

  if (senha === senhaUnica) {
    next();
  } else {
    res.status(401).json({ error: "Senha incorreta" });
  }
}

exports. default = verificarSenhaUnica;
