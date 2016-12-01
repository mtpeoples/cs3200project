var q = require('q');

module.exports = function(mongoose) {
  var MovieSchema = require('./movie.schema.js')(mongoose);
  var MovieModel = mongoose.model('Movie', MovieSchema);

  var service = {
    create: create,
    getByTitle: getByTitle
  }

  return service;

  function create(movie) {
    var deferred = q.defer();
    MovieModel.create(movie, function(err, doc) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(movie);
    });
    return deferred.promise;
  }

  function getByTitle(title) {
    var deferred = q.defer();
    MovieModel.findOne({ Title: title }, function(err, movie) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(movie);
    });
    return deferred.promise;
  }
}
