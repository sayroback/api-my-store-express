const express = require("express");
const app = express();
const port = 3005;

app.get("/", (request, response) => {
  response.send("Hola mi server en Express");
});

app.get("/products", (request, response) => {
  response.json([
    {
      name: "Producto 1",
      price: 1000,
    },
    {
      name: "Producto 2",
      price: 2000,
    },
  ]);
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

app.listen(port, () => {
  console.log("My port: " + port);
});
