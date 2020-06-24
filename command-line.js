const pg = require('pg');
const Client = pg.Client;

// const { Client } = require('pg');

const configuration = {
  user: 'bnalovxv',
  database: 'bnalovxv',
  port: '5432',
  password: 'm5ynY0jsrfQQkZDirn7KXelAt8s-iBNM',
  host: 'ruby.db.elephantsql.com'
};

const client = new Client(configuration);

client.connect(() => {
  console.log('successfully connected to the database');
});

const verb = process.argv[2];
let id;

switch (verb) {
  case 'browse':
    // client.query('SELECT * FROM movie_villains;')
    //   .then((data) => {
    //     console.log(data.rows);
    //     client.end();
    //   });
    client.query('SELECT * FROM movie_villains;', (err, data) => {
      console.log(data.rows);
      client.end();
    });
    break;

  case 'read':
    id = process.argv[3];
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((data) => {
        console.log(data.rows);
        client.end();
      });
    break;

  case 'edit':
    id = process.argv[3];
    const newVillainName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newVillainName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const newVillain = process.argv[3];
    const newMovie = process.argv[4];
    client.query('INSERT INTO movie_villains(villain, movie) VALUES($1, $2);', [newVillain, newMovie])
      .then(() => {
        console.log('villain added to roster');
        client.end();
      });
    break;

  case 'delete':
    id = process.argv[3];
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain has been dealt with');
        client.end();
      });
    break;

  default:
    console.log('please give us a verb');
    client.end();
}
