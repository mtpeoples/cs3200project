module.exports = function(mongoose) {
  var MovieSchema = mongoose.Schema({
    Title: String,
    Year: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: [String],
    Director: String,
    Actors: [String], 
    Plot: String,
    Poster: String,
    imdbRating: String,
    imdbVotes: String     
  }, { collection: 'movie' });
  return MovieSchema;
}