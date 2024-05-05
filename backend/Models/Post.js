const mongoose = require('mongoose');


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
    default: true 
  }
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
