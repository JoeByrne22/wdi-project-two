const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('./config/environments');
const router = require('./config/router');
const methodOverride = require('method-override');
const expressEjsLayouts = require('express-ejs-layouts');
const session = require('express-session');
const auth = require('./lib/auth');

app.use(session({
  secret: 'hafvwh',
  resave: false,
  saveUninitialized: false
}));


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(env.dbUri);


app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

app.use(express.static('public'));

app.use('*', auth.checkAuthStatus);
app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
