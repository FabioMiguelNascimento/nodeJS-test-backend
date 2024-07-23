const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// Routes 
app.use("/api/products", productRoute)


app.get("/", (req, res) => {
  res.send("Hello from Node API!");
});


mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.07heccc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database conectada");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Erro ao conectar ao banco de dados", err);
  });
