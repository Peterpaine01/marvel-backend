require("dotenv").config();

const express = require("express");
const router = express.Router();

const axios = require("axios");

// ROUTE GET > all comics
router.get("/comics", async (req, res) => {
  const { title, skip } = req.query;
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MY_API_KEY}&title=${title}&skip=${skip}`
  );
  res.json(response.data);
});

// ROUTE GET > list of comics for 1 character
router.get("/comics/:characterId", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.MY_API_KEY}`
  );
  res.json(response.data);
});

module.exports = router;

// ROUTE GET > infos of specific comics
router.get("/comic/:comicId", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.comicId}?apiKey=${process.env.MY_API_KEY}`
  );
  res.json(response.data);
});

module.exports = router;
