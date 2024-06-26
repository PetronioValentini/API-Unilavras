import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";

import {
  cacheHandler,
  cacheHandlerAll,
  clearCache,
  clearCacheAll,
} from "../middlewares/cacheMiddleware";

const router = new Router();

router.post("/", clearCacheAll("produto"), ProdutoController.store);
router.get("/", cacheHandlerAll("produto"), ProdutoController.index);
router.get("/:id", cacheHandler("produto"), ProdutoController.show);
router.put("/:id", clearCacheAll("produto"), ProdutoController.update);
router.delete("/:id", clearCache("produto"), ProdutoController.delete);

export default router;
