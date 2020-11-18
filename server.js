const express = require('express');
const server = express();
const port = 3000;

// USERS CAN'T SEE THE PASSWORD WHEN IT'S HERE
const mySecretPassword = "SUPER SECRET PASSWORD, API KEY, ETC";

server.get('/data', (request, response) => {
  const data = {
    foo: 'bar',
    msg: 'password is ' + (mySecretPassword === null ? 'null' : 'not null')
  };

  response.set('Access-Control-Allow-Origin', '*');
  response.send(data);
});

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port} ...`);
});
