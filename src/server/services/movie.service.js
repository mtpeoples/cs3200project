var http = require('http');
var queryString = require('query-string');

module.exports = function(app, model) {

  app.get("/api/movie", function(req, res) {
    var title = req.query.title;
    if (!title) {
      res.status(400).send("No title entered");
    } 

    model.getByTitle(title).then(function(movie) {
      if (!movie || movie.length == 0) {
        var qs = queryString.stringify({ t: title });
        var options = {
          host: 'www.omdbapi.com',
          path: '/?' + qs
        };

        function callback(response) {
          var str = '';

          //another chunk of data has been recieved, so append it to `str`
          response.on('data', function(chunk) {
            str += chunk;
          });

          //the whole response has been recieved, so we just print it out here
          response.on('end', function() {
            var data = JSON.parse(str);
            if(data.Response == 'False') {
            	res.status(404).send(data.Error);
            }
            data.Genre = data.Genre.split(', ');
            data.Actors = data.Actors.split(', ');

            model.create(data).then(function(movie) {
              res.json(movie);
            }, function(err) {
            	res.status(400).send(err);
            });
          });
        }

        return http.request(options, callback).end();
      }
      res.json(movie);
    }, function(err) {
      res.status(404).send(err);
    });
  });
}
