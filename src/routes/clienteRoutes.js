import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
import verificarSenha from "../middlewares/tokenMiddleware";

const router = new Router();

router.post("/", verificarSenha, ClienteController.store);
router.get("/", ClienteController.index);
router.get("/:id", ClienteController.show);
router.put("/:id", verificarSenha, ClienteController.update);
router.delete("/:id", verificarSenha, ClienteController.delete);

export default router;
