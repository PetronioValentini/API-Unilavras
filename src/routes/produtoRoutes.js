import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";
import verificarSenha from "../middlewares/tokenMiddleware";
import {
  cacheHandler, cacheHandlerAll, clearCache, clearCacheAll,
} from "../middlewares/cacheMiddleware";

const router = new Router();

router.post("/", clearCacheAll("produto"), verificarSenha, ProdutoController.store);
router.get("/", cacheHandlerAll("produto"), ProdutoController.index);
router.get("/:id", cacheHandler("produto"), ProdutoController.show);
router.put("/:id", verificarSenha, ProdutoController.update, clearCache("produto"));
router.delete("/:id", verificarSenha, ProdutoController.delete, clearCache("produto"));

export default router;
