const Author = require('../models/author');

// display a list of all the authors
exports.author_list = function(req, res, next) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });

};
// render details page for a particular author
exports.author_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: author detail' + req.params.id);
}
// render an Author create form on GET request
exports.author_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: author create GET');
}
// handles Author create on post request
exports.author_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: author create POST');
}
// display Author delete form on GET request
exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: author delete GET');
}
// handle Author delete on POST
exports.author_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: author delete POST');
}
// display Author update form on GET request
exports.author_update_get = (req, res) =>{
  res.send('NOT IMPLEMENTED: author update GET')
}
// handle Author update on POST
exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: author update POST')
}