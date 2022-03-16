const Author = require('../models/author');

// display a list of all the authors
exports.author_list = (req, res) => {
  res.send('NOT IMPLEMENTED: author list');
}
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