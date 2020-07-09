const express = require('express');
const routes = express.Router();

const ComputersController = require('./controllers/ComputersController')
const UserConstrollers = require('./controllers/UserControllers')

routes.get('/computers', ComputersController.index);
routes.post('/computers/new', ComputersController.create)
routes.put('/computers/update/:codigo', ComputersController.update)

routes.get('/users', UserConstrollers.index);
routes.post('/user/new', UserConstrollers.create);
routes.post('/users/login', UserConstrollers.authentication);

module.exports = routes;