const User = require('../models/user');

//Getting the register form
function registerFormRoute(req, res) {
  res.render('auth/register');
}

// Register route
function registerRoute(req, res) {
  User.create(req.body)
    .then(result => {
      console.log('User created', result);
      res.redirect('/');
    });
}

//Getting the login form
function loginFormRoute(req, res) {
  res.render('auth/login');
}

//Login Router
function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(result => {
      if (!result) {
        res.redirect('/login');
      } else {
        req.session.userId = result._id;
        res.redirect('/');
      }
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

//logout Router
function logoutRoute(req, res, next) {
  req.session.regenerate(function() {
    res.redirect('/');
    next();
  });
}


module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
