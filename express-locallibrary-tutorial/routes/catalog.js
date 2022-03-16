const express = require('express');
const router = express.Router();

// require controller modules
const book_controller = require('../controllers/bookController');
const book_instance_controller = require('../controllers/bookinstanceController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');

/// BOOK ROUTES ///

// GET catalog home page
router.get('/', book_controller.index);

// GET for create book form; must come before the display book
// otherwise the 'create' will be parsed as an ID
router.get('/book/create', book_controller.book_create_get);

// POST for submitting a create book form
router.post('/book/create', book_controller.book_create_post);

// GET request for delete book page
router.get('/book/delete', book_controller.book_delete_get);

// 
