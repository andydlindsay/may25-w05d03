const client = require('./db');

const getVillains = (cb) => {
  client.query('SELECT * FROM movie_villains;')
    .then((data) => {
      // console.log(data.rows);
      cb(data.rows);
    });
};

const getVillainById = (id) => {
  return client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((data) => {
      return data.rows[0];
    });
};

module.exports = {
  getVillains,
  getVillainById
};
