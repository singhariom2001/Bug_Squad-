const mongoose = require('mongoose');

// License Schema
const licenseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  LicenseId: {
    type: Number,
    required: true,
  },
  LicenseName: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  Books: [{
    Bookid: {
      type: Number,
      required: true,
    },
    BookName: {
      type: String,
      required: true,
    },
    ispremium: {
      type: Boolean,
      required: true,
    },
    Concurrency: {
      type: Number,
      required: true,
    },
  }],
});

module.exports = mongoose.model('Licenses', licenseSchema);
