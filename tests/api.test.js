/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../src/app").default;

// TESTA PRODUTOS
describe("Testando rotas de produtos", () => {
  it("Deve retornar status 200 ao fazer GET em /produtos/", async () => {
    const response = await request(app).get("/produtos");
    expect(response.status).toBe(200);
  });

  it("Deve retornar status 200 ao fazer GET em /produtos/:id", async () => {
    const response = await request(app).get("/produtos/1");
    expect(response.status).toBe(200);
  });

  it("Deve adicionar um novo produto via POST em /produtos/", async () => {
    const novoProduto = {
      nome: "BREJA",
      preco: 100.00,
      descricao: "Descrição do novo produto",
    };

    const response = await request(app).post("/produtos").send(novoProduto);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.nome).toBe(novoProduto.nome);
  });

  it("Deve deletar um produto existente via DELETE em /produtos/:id", async () => {
    const response = await request(app).delete("/produtos/10");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Produto deletado com sucesso!");
  });

  it("Deve retornar status 404 ao tentar buscar um produto não existente via GET em /produtos/:id", async () => {
    const response = await request(app).get("/produtos/99999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Produto não encontrado");
  });
});

// TESTA CLIENTES

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXN1YXJpbyI6Im9pIiwiaWF0IjoxNzE4ODkzMDM3LCJleHAiOjE3MTg4OTMwNjd9.E7CTABfATPfFgca8zRBpA7Xk_o8x4FVHnxQ6ZQzG108";

describe("Testando rotas de clientes", () => {
  it("Deve retornar status 200 ao fazer GET em /clientes/", async () => {
    const response = await request(app)
      .get("/clientes")
      .set("Authorization", `Bearer ${authToken}`);
    expect(response.status).toBe(200);
  });

  it("Deve retornar status 200 ao fazer GET em /clientes/:id", async () => {
    const response = await request(app)
      .get("/clientes/1")
      .set("Authorization", `Bearer ${authToken}`);
    expect(response.status).toBe(200);
  });

  it("Deve adicionar um novo cliente via POST em /clientes/", async () => {
    const novoCliente = {
      nome: "CLIENTE",
      sobrenome: "SOBRE CLIENTE",
      email: "EMAIL@gmail.com",
      idade: 50,
    };

    const response = await request(app)
      .post("/clientes")
      .send(novoCliente)
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.nome).toBe(novoCliente.nome);
  });

  it("Deve deletar um cliente existente via DELETE em /clientes/:id", async () => {
    const response = await request(app)
      .delete("/clientes/10")
      .set("Authorization", `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Cliente deletado com sucesso!");
  });

  it("Deve retornar status 404 ao tentar buscar um cliente não existente via GET em /clientes/:id", async () => {
    const response = await request(app).get("/clientes/99999");
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Cliente não encontrado");
  });
});
