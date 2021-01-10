const Express = require('express');
const homeController = require('../controllers/homeController');

const Router = Express.Router();

Router.get('/', homeController.getHomePage);

module.exports = Router;
