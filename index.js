const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

const express = require('express');
const cors = require('cors');

// Enable CORS for all origins
server.use(cors());


server.use(middlewares);
server.use(router);

server.listen(port);