const express = require('express');
const Post = require('../Models/Post');

const route = express.Router();

route.post('/addposts', async (req, res) => {
    try {
     
      const { title, body, tags, active } = req.body;
      
     
      const newPost = await Post.create({
        title,
        body,
        tags,
        active
      });
  
      
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  route.put('/updatePosts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const updatedPost = req.body; 
      
      const post = await Post.findByIdAndUpdate(postId, updatedPost, { new: true });
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.json(post); 
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  route.get('/posts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
  
  
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.json(post); 
    } catch (error) {
      console.error('Error finding post by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

route.get('/getPost',async (req,res)=>{


    const post = await Post.find({});

    res.send({post})
    
      


})
route.delete('/posts/:id', async (req, res) => {
    try {
     
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
  
      if (!deletedPost) {
        return res.status(404).send({ error: 'Post not found' });
      }
  
      res.send({ message: 'Post deleted successfully', deletedPost });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal server error' });
    }
  });

route.get('/savePost',async(req,res)=>{
    const response = await Post.create({
        title:'sample post',
        body:'this is body',
        tags:'these are tags',
        active:true
    });


    res.send(response)
})


module.exports = route;