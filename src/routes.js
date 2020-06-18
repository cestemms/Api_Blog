const express = require('express');
const routes = express.Router();

const PostController = require('./controllers/PostController');

//Setando rota
routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.post('/posts', PostController.store);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.destroy);


module.exports = routes;
