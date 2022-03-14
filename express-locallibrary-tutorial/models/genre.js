const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100},
  }
);

// virtual for the URL of the genre
GenreSchema
.virtual('url')
.get(function() {
    return '/genre/' + this.name;
  }
);

module.exports = mongoose.model('Genre', GenreSchema);