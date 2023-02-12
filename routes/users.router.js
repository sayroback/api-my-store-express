const express = require("express");

const router = express.Router();

// http://localhost:3005/users?limit=122&offset=233
router.get("/", (request, response) => {
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

module.exports = router;
