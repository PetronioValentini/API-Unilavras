import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";
import verificarSenha from "../middlewares/tokenMiddleware";

const router = new Router();

router.post("/", verificarSenha, UsuarioController.store);
router.get("/", UsuarioController.index);
router.get("/:id", UsuarioController.show);
router.put("/:id", verificarSenha, UsuarioController.update);
router.delete("/:id", verificarSenha, UsuarioController.delete);

export default router;
