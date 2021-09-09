const mongoose = require('mongoose');

const { Schema } = mongoose;

const characters = new Schema({
  name: { type: String },
  status: { type: String },
  last_location: { type: String },
  first_apperance: { type: String },
  img: { type: String },
});

module.exports = mongoose.model('characters', characters);
