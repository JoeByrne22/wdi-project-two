const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  name: String,
  description: String,
  releaseDate: Number,
  cast: [String],
  image: String,
  comments: [
    {
      user: { type: String },
      content: {type: String },
      score: {type: Number}
    }
  ]
});


const filmModel = mongoose.model('film', filmSchema);

module.exports = filmModel;
