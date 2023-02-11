const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3005;

app.get("/", (request, response) => {
  response.send("Hola mi server en Express");
});

app.get("/products", (request, response) => {
  const products = [];
  const { size } = request.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
    });
  }
  response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  response.json([
    {
      id,
      name: "Producto 1",
      price: 1000,
    },
  ]);
});

// http://localhost:3005/categories/4123/products/12455
app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// http://localhost:3005/users?limit=122&offset=233
app.get("/users", (request, response) => {
  const { limit, offset } = request.query;
  if (limit && offset) {
    response.json([
      {
        limit,
        offset,
      },
    ]);
  } else {
    response.send("No hay parámetros");
  }
});

app.listen(port, () => {
  console.log("My port: " + port);
});
