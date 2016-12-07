var q = require('q');

module.exports = function(mongoose) {
  var MovieSchema = require('./movie.schema.js')(mongoose);
  var MovieModel = mongoose.model('Movie', MovieSchema);

  var service = {
    create: create,
    getByTitle: getByTitle,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
  }

  return service;

  function create(movie) {
    var deferred = q.defer();
    MovieModel.create(movie, function(err, result) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(result);
    });
    return deferred.promise;
  }

  function getByTitle(title) {
    var deferred = q.defer();
    MovieModel.findOne({ Title: title }, function(err, result) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(result);
    });
    return deferred.promise;
  }

  function updateMovie(id, movie) {
    var deferred = q.defer();
    MovieModel.findByIdAndUpdate(id, movie, {new: true}, function(err, result) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve(result);
    });
    return deferred.promise;
  }

  function deleteMovie(id) {
    var deferred = q.defer();
    MovieModel.findByIdAndRemove(id, function(err) {
      if (err) {
        deferred.reject(err);
      }
      deferred.resolve();
    });
    return deferred.promise;
  }
}
