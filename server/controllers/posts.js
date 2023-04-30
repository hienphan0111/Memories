import PostMessage from '../models/postMessage.js';
//import mongoose from 'mongoose';

//const PostMessage = mongoose.model('PostMessage');

export const getPosts = async (req, res) => {
  try {
    const post = await PostMessage.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const createPost = async (req, res) => {
  try {
    const post = PostMessage(req.body);
    await post.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message})
  }
}
