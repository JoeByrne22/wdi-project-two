const Film = require('../models/film');

function createRoute(req, res) {
  console.log(req.body);
  Film.findById(req.params.filmsId)
    .then(film => {
      film.comments.push(req.body);
      film.save().then(() => res.redirect(`/films/${film.id}`));
    });
}

function deleteRatingsRoute(req, res) {
  Film
    .findById(req.params.filmsId)
    .then(film => {
      film.comments.id(req.params.commentId).remove();
      film.save()
        .then(() => res.redirect(`/films/${film.id}`));
    })
    .catch(err => console.log(err));
}

module.exports = {
  createRoute: createRoute,
  deleteRatingsRoute: deleteRatingsRoute
};
