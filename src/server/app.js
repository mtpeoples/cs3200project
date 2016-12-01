module.exports = function(app, mongoose) {

	var movieModel = require('./models/movie.model.js')(mongoose);
	var movieService = require('./services/movie.service.js')(app, movieModel);
}