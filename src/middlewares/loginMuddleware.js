import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ["Login requerido"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const dados = jwt.decode(token);
    const { id, usuario } = dados;

    req.userId = id;
    req.user = usuario;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expirado ou invalido"],
    });
  }
};
