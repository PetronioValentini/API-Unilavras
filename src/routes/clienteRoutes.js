import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
import verificarSenha from "../middlewares/tokenMiddleware";
import {
  cacheHandler, cacheHandlerAll, clearCache, clearCacheAll,
} from "../middlewares/cacheMiddleware";

const router = new Router();

router.post("/", clearCacheAll("cliente"), verificarSenha, ClienteController.store);
router.get("/", cacheHandlerAll("cliente"), ClienteController.index);
router.get("/:id", cacheHandler("cliente"), ClienteController.show);
router.put("/:id", clearCache("cliente"), verificarSenha, ClienteController.update);
router.delete("/:id", verificarSenha, ClienteController.delete, clearCache("cliente"));

export default router;
