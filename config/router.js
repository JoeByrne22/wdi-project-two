const router = require('express').Router();
const filmController = require('../controllers/filmController');
const authController = require('../controllers/authController');
const ratingsController = require('../controllers/ratingsController');

//homepage
router.get('/', function(req, res) {
  res.render('home');
});

//Register Router
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

//login Router
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

//Index Route
router.get('/films', filmController.indexRoute);

//About Route
router.get('/about', filmController.aboutRoute);

//Show Route
router.get('/films/:id', filmController.showRoute);

//New Route
router.get('/new', filmController.newRoute);

//Create Route
router.post('/films', filmController.createRoute);

//Edit Router
router.get('/films/:id/edit', filmController.editRoute);

//Update Router
router.put('/films/:id', filmController.updateRoute);

//Delete Route.
router.delete('/films/:id', filmController.deleteRoute);

//logout Router
router.get('/logout', authController.logoutRoute);

//Comment Router
router.post('/films/:filmsId/comments', ratingsController.createRoute);

//deleting comment router.
router.delete('/films/:filmsId/comments/:commentId', ratingsController.deleteRatingsRoute);

module.exports = router;
