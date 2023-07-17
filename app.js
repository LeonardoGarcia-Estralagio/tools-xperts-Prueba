const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030;

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "carritoDeCompras.html"))
);

app.get("/productos", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "carritoConProductos.html"))
);

app.get("/header", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "header.html"))
);

app.get("/footer", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "footer.html"))
);

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
