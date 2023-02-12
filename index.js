const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3005;

app.get("/", (request, response) => {
  response.send("Hola mi server en Express");
});

app.listen(port, () => {
  console.log("My port: " + port);
});

routerApi(app);
