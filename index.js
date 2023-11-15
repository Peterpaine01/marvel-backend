require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");
app.use(comicsRoutes);
app.use(charactersRoutes);

// -------- SET UP ----------

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
