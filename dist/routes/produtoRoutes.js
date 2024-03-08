"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProdutoController = require('../controllers/ProdutoController'); var _ProdutoController2 = _interopRequireDefault(_ProdutoController);
var _tokenMiddleware = require('../middlewares/tokenMiddleware'); var _tokenMiddleware2 = _interopRequireDefault(_tokenMiddleware);

const router = new (0, _express.Router)();

router.post("/", _tokenMiddleware2.default, _ProdutoController2.default.store);
router.get("/", _ProdutoController2.default.index);
router.get("/:id", _ProdutoController2.default.show);
router.put("/:id", _tokenMiddleware2.default, _ProdutoController2.default.update);
router.delete("/:id", _tokenMiddleware2.default, _ProdutoController2.default.delete);

exports. default = router;
