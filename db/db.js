const pg = require('pg');
const Client = pg.Client;

const configuration = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST
};

const client = new Client(configuration);

client.connect(() => {
  console.log('successfully connected to the database');
});

module.exports = client;
