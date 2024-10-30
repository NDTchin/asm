const mongoose = require('mongoose');

const TreeCollectionSchema = new mongoose.Schema({
  treename: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String}, 
});

module.exports = mongoose.model('TreeCollection', TreeCollectionSchema);