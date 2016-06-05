'use strict';

let express = require('express');
let expressHandlebars = require('express-handlebars');
let path = require('path');

let app = express();

const APP_PORT = process.env.PORT || 8080;
const APP_HOSTNAME = 'localhost';
const DIR_TEMPLATES = path.join('.', 'src', 'templates');

app.engine('hbs', expressHandlebars({
  defaultLayout: 'index',
  extname: 'hbs',
  layoutsDir: DIR_TEMPLATES
}));
app.set('view engine', 'hbs');
app.set('views', DIR_TEMPLATES);

app.use('/static', express.static('public'));
app.use('', require('./routes'));

app.listen(APP_PORT, () => {
  console.log(`Server at ${APP_HOSTNAME}:${APP_PORT}`);
});
