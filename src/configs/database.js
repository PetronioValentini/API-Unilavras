require("dotenv").config();

module.exports = {
  dialect: "mariadb",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,

  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    createdAt: false,
    updatedAt: "data_atualizado",
  },

  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  timezone: "America/Sao_Paulo",
};
