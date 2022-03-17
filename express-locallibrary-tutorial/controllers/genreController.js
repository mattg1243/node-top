const Genre = require('../models/genre');
const Book = require('../models/book');
const async = require('async');
// display list of all Genre.
exports.genre_list = function(req, res, next) {

  Genre.find()
  .exec(function(err, genre_list) {
    if (err) { return next(err); }

    res.render('genre_list', { title: 'Genre List', list_genre: genre_list });
  })

};
// display detail page for a specific Genre.
exports.genre_detail = function(req, res, next) {

  async.parallel({
      genre: function(callback) {
          Genre.findById(req.params.id)
            .exec(callback);
      },

      genre_books: function(callback) {
          Book.find({ 'genre': req.params.id })
            .exec(callback);
      },

  }, function(err, results) {
      if (err) { return next(err); }
      if (results.genre==null) { // No results.
          var err = new Error('Genre not found');
          err.status = 404;
          return next(err);
      }
      // Successful, so render
      res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
  });

};
// display Genre create form on GET.
exports.genre_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create GET');
};
// handle Genre create on POST.
exports.genre_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create POST');
};
// display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET');
};
// handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST');
};
// display Genre update form on GET.
exports.genre_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
};
// handle Genre update on POST.
exports.genre_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
};