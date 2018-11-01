const Film = require('../models/film');


//Index Route
function indexRoute(req, res) {
  Film
    .find()
    .then(function(result) {
      const filmObject = {
        films: result
      };
      res.render('films/index', filmObject);
    });
}

//About Route
function aboutRoute(req, res) {
  res.render('../views/about');
}

//Show Route
function showRoute(req, res) {
  Film
    .findById(req.params.id)
    .then(result => {
      res.render('films/show', result);
    });
}

//New Route
function newRoute(req, res) {
  res.render('../views/films/new');
}

//Create Route
function createRoute(req, res) {
  Film.create(req.body)
    .then(result => res.redirect(`/films/${result._id}`));
}

//Edit Route.
function editRoute(req, res) {
  console.log('this is the edit route');
  Film.findById(req.params.id)
    .then(result => {
      res.render('films/edit', result);
    });
}

//Update Router
function updateRoute(req, res) {
  console.log(`Updating planet id ${req.params.id}`, req.body);
  console.log('this is update route');
  Film.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/films');
    });
}

//Delete router
function deleteRoute(req, res ) {
  console.log('this is the deleteroute');
  Film.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/films'));
}




module.exports = {
  indexRoute: indexRoute,
  aboutRoute: aboutRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
