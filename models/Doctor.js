const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  department: { type: String, required: true },
  experience: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
