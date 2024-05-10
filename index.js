const jsonServer = require("json-server");
const express = require('express');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Enable CORS
server.use(cors());


// Apply JSON Server middlewares
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


