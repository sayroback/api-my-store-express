const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (request, response) => {
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

router.get("/:id", (request, response) => {
  const { id } = request.params;
  response.json([
    {
      id,
      name: "Producto 1",
      price: 1000,
    },
  ]);
});

// http://localhost:3005/products/categories/4123/products/12455
router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
