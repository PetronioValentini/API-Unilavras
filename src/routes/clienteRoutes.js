import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
import verificarSenha from "../middlewares/tokenMiddleware";
import {
  cacheHandler, cacheHandlerAll, clearCache, clearCacheAll,
} from "../middlewares/cacheMiddleware";
import login from "../middlewares/loginMuddleware";

const router = new Router();

router.post("/", login, clearCacheAll("cliente"), verificarSenha, ClienteController.store);
router.get("/", login, cacheHandlerAll("cliente"), ClienteController.index);
router.get("/:id", login, cacheHandler("cliente"), ClienteController.show);
router.put("/:id", login, clearCache("cliente"), verificarSenha, ClienteController.update);
router.delete("/:id", login, verificarSenha, ClienteController.delete, clearCache("cliente"));

export default router;
