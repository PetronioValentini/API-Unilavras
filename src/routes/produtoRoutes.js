import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";
import verificarSenha from "../middlewares/tokenMiddleware";

const router = new Router();

router.post("/", verificarSenha, ProdutoController.store);
router.get("/", ProdutoController.index);
router.get("/:id", ProdutoController.show);
router.put("/:id", verificarSenha, ProdutoController.update);
router.delete("/:id", verificarSenha, ProdutoController.delete);

export default router;
