import PostMessage from '../models/postMessage.js';

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
    const post = req.body;
    await PostMessage.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message})
  }
}
