const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, 'public')));

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(routes);

module.exports = app;
