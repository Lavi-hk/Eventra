const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  clubName: { type: String, required: true },
  clubDescription: { type: String, required: true },
  clubDirector: { type: String, required: true },
  clubLogo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Club = mongoose.model('Club', ClubSchema);
module.exports = Club;
