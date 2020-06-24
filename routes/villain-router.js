// const router = require('express').Router();

const express = require('express');
const router = express.Router();
const villainQueries = require('../db/villain-queries');

router.get('/', (req, res) => {
  villainQueries.getVillains((villains) => {
    res.render('villains', { villains });
  });
}); // villains/

router.get('/:id', (req, res) => {
  villainQueries.getVillainById(req.params.id)
    .then((villain) => {
      res.render('villain', { villain });
    });
}); // villains/:id

module.exports = router;
