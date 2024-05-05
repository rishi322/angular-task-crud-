const mongoose = require('mongoose');

// Define schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  active: {
    type: String,
    default: true // Set default value to true for active
  }
});

// Create model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
