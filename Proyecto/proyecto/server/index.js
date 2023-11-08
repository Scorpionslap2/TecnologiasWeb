const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req, res) => res.send("Server is up and running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(express.json())

mongoose
  .connect(process.env.MONGO_PROD_URI)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.use("/api/usuarios", require("./routes/usuario.routes"));

module.exports = app;