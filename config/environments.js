const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/lights-camera-review';
const port = process.env.PORT || 4000;

module.exports = {
  dbUri: dbUri,
  port: port
};
