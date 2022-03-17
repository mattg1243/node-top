const BookInstance = require('../models/bookinstance');

// diplay a list of all BookInstances
exports.bookinstance_list = (req, res, next) => {
  
  BookInstance.find()
  .populate('book')
  .exec(function (err, list_bookinstances) {
    if (err) { return next(err); }

    res.render('bookinstance_list', 
      { title: 'Book Instance List', bookinstance_list: list_bookinstances }
    )
  })
}
// display detail page for a specific BookInstance
exports.bookinstance_detail = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance detail" + req.params.id);
}
// display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
};
// handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
};
// display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
};
// handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
};
// display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
};
// handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
};