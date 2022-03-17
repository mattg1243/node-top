const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

const BookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: [
        'Available',
        'Maintenance',
        'Loaned',
        'Reserved'
      ], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }
)

// virtual for bookinstances URL
BookInstanceSchema
.virtual('url')
.get(function() {
  return '/catalog/bookinstance/' + this._id;
})

// virutal for formatting the dates
BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});
// export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);