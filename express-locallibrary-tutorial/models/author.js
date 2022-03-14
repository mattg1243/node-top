const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
) 

// virtual for the authors full name; this is used in case the author
// doesnt have a family name or first name
// we want to handle this exception by returning an empty string

AuthorSchema
.virtual('name')
.get(function() {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

// virtual for the authors lifespan
AuthorSchema.virtual('lifespan').get(function() {
  let lifetime_string = ""; 
  if (this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  lifetime_string += ' - ';
  if (this.date_of_death) {
    lifetime_string += this.date_of_death.getYear().toString();
  } else {
    lifetime_string += "Present";
  }
  return lifetime_string;
});

// virtual for authors URL
AuthorSchema.virtual('url').get(function() {
  return '/catalog/author/' + this._id;
});

// export model 
module.exports = mongoose.model("Author", AuthorSchema);