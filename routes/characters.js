require("dotenv").config();

const express = require("express");
const router = express.Router();

const axios = require("axios");

// ROUTE GET > list of all characters
router.get("/characters", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MY_API_KEY}`
  );
  return res.json(response.data);
});

// ROUTE GET > infos of a specific character
router.get("/character/:characterId", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.MY_API_KEY}`
  );
  return res.json(response.data);
});

module.exports = router;
