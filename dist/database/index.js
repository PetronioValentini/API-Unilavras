"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../configs/database'); var _database2 = _interopRequireDefault(_database);
var _Cliente = require('../models/Cliente'); var _Cliente2 = _interopRequireDefault(_Cliente);
var _Produto = require('../models/Produto'); var _Produto2 = _interopRequireDefault(_Produto);

const models = [_Cliente2.default, _Produto2.default];
const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
