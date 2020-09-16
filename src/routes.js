const express = require('express');
const routes = express.Router();
const Login = require('./middleware/Login')

const ComputersController = require('./controllers/ComputersController')
const UserConstrollers = require('./controllers/UserControllers')
const AuthenticationController = require("./controllers/AuthenticationControllers")

routes.get('/computers', Login, ComputersController.index);
routes.post('/computers/new', Login, ComputersController.create)
routes.put('/computers/update/:codigo', Login, ComputersController.update)

routes.get('/users', UserConstrollers.index);
routes.post('/user/new', UserConstrollers.create);
routes.post('/users/login', AuthenticationController.authentication);

module.exports = routes;