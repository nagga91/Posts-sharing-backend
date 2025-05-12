const Post = require('../models/Post');
const fs = require('fs');
const path = require('path');

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) return res.status(400).json({ message: 'Post content is required' });

    const image = req.file ? req.file.path : null;

    const post = await Post.create({
      content,
      image,
      user: req.user._id
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create post', error: err.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find()
        .populate('user', 'name email')
        .sort({ createdAt: -1 });
  
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch posts', error: err.message });
    }
  };
  
  // Delete a post (only by owner)
  exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      // Check if current user is the owner
      if (post.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to delete this post' });
      }
  
      // Delete image if it exists
      if (post.image && fs.existsSync(post.image)) {
        fs.unlinkSync(post.image);
      }
  
      await post.deleteOne();
      res.json({ message: 'Post deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete post', error: err.message });
    }
  };