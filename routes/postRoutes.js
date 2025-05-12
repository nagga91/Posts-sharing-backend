const express = require('express');
const router = express.Router();
const upload = require('../middewares/upload');
const { protect } = require('../middewares/authMiddleware');
const { createPost, getAllPosts, deletePost } = require('../controllers/postController');

// Create post
router.post('/', protect, upload.single('image'), createPost);

// Get all posts (public)
router.get('/', getAllPosts);

// Delete a post (owner only)
router.delete('/:id', protect, deletePost);

module.exports = router;
