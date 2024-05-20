import NodeCache from "node-cache";
import winston from "winston";
import Cliente from "../models/Cliente";
import Produto from "../models/Produto";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}] ${message}`,
    ),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

const cache = new NodeCache({ stdTTL: 30, checkperiod: 60 });

// CRIA O INSTANCIA CACHE
export const cacheMiddleware = (req, res, next) => {
  req.cache = cache;
  next();
};

// INICIALIZA O CACHE

export const cacheHandler = (tipo) => async (req, res) => {
  const cacheKey = `${tipo}_${req.params.id}`;
  const cachedData = req.cache.get(cacheKey);

  if (cachedData) {
    logger.info(`Com Cache BD: ${cacheKey}`);
    console.log(`Com cache: ${cacheKey}`);
    return res.json(cachedData);
  }

  logger.info(`Cache BD faltando para: ${cacheKey}`);
  console.log(`Sem cache: ${cacheKey}`);

  try {
    let item;
    if (tipo === "cliente") {
      item = await Cliente.findByPk(req.params.id);
    }
    if (tipo === "produto") {
      item = await Produto.findByPk(req.params.id);
    }
    if (!item) {
      return res.status(404).json({ error: `${cacheKey} não encontrado` });
    }

    req.cache.set(cacheKey, item);
    return res.json(item);
  } catch (error) {
    logger.error(`Erro ao buscar ${tipo}: ${error.message}`);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// INICIALIZA O CACHE TODOS FUNCIONANDO 100%
export const cacheHandlerAll = (tipo) => async (req, res) => {
  const cachedData = req.cache.get(tipo);

  if (cachedData) {
    logger.info(`Com Cache BD: ${tipo}s`);
    console.log(`Com cache: ${tipo}s`);
    return res.json(cachedData);
  }

  logger.info(`Cache BD faltando para: ${tipo}s`);
  console.log(`Sem cache: ${tipo}s`);

  try {
    let items;
    if (tipo === "produto") {
      items = await Produto.findAll();
    }
    if (tipo === "cliente") {
      items = await Cliente.findAll();
    }

    items.forEach((item) => {
      const cacheKey = `${tipo}_${item.id}`; // chave unica
      req.cache.set(cacheKey, item);
    });

    // Armazene a lista de items no cache usando o chave
    req.cache.set(tipo, items);

    return res.json(items);
  } catch (error) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// LIMPA CACHE (FUNCIONANDO)
export const clearCache = (tipo) => async (req, res, next) => {
  const cacheId = `${tipo}_${req.params.id}`;
  const allCacheKey = tipo;

  console.log(cacheId);

  logger.info(`clearCache param: ${cacheId}`);
  console.log(`Cache limpo: ${cacheId}`);

  if (req.cache.has(cacheId)) {
    req.cache.del(cacheId);
    console.log(`limpo de ${cacheId}`);
    logger.info("Cache limpo");
    console.log("Cache limpo");

    // Atualiza o cache da lista de items após a remoção do item
    const cached = req.cache.get(allCacheKey);
    if (req.cache.get(allCacheKey)) {
      const updatedItems = cached.filter(
        (item) => item.id !== parseInt(req.params.id, 10),
      );
      req.cache.set(allCacheKey, updatedItems);
      console.log(
        `Cache da lista de items atualizado após a remoção do item ${cacheId}`,
      );
    }
  } else {
    logger.info(`Cache ${cacheId} não encontrado`);
    console.log(`Cache ${cacheId} não encontrado`);
  }

  next();
};

// LIMPA TODO O CACHE
export const clearCacheAll = (tipo) => async (req, res, next) => {
  const allCacheKey = tipo;
  if (req.cache.has(allCacheKey)) {
    req.cache.del(allCacheKey);
    console.log(`Cache de todos os ${tipo}s foi limpo`);
    logger.info(`Cache de todos os ${tipo}s foi limpo`);
  }
  next();
};
