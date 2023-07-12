const http = require('http');
const express = require('express');
const getUsers = require('../routes/getUsers');
const addUsers = require('../routes/addUsers');
const searchUser = require('../routes/searchUser');
const deleteUser = require('../routes/deleteUser');
const bodyParser = require('body-parser');
const app = express()

const server = http.createServer(app);
const port = '2000';
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Appel des routes
app.get('/listUsers', getUsers);
app.post('/addUsers', addUsers);
app.get('/searchUser', searchUser);
app.post('/deleteUser', deleteUser);

server.on('close', () => {
  connection.end((err) => {
      if (err) {
          console.log('Erreur lors de la fermeture de la connection de la bdd.', err);
          return;
      }
      console.log('Connection à la base de donnée fermée.')
  });
});
