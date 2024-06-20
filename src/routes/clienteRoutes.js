import { Router } from "express";
import ClienteController from "../controllers/ClienteController";
import {
  cacheHandler,
  cacheHandlerAll,
  clearCache,
  clearCacheAll,
} from "../middlewares/cacheMiddleware";
import login from "../middlewares/loginMuddleware";

const router = new Router();

router.post("/", login, clearCacheAll("cliente"), ClienteController.store);
router.get("/", login, cacheHandlerAll("cliente"), ClienteController.index);
router.get("/:id", login, cacheHandler("cliente"), ClienteController.show);
router.put("/:id", login, clearCacheAll("cliente"), ClienteController.update);
router.delete("/:id", login, clearCache("cliente"), ClienteController.delete);

export default router;
