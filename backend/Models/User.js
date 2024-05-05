const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
   // Ensures usernames are unique
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
   // Ensures emails are unique
  },
  mobileNumber: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], // Only allow specific values
    required: true
  }
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
