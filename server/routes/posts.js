import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', getPosts);
router.post('/', createPost);

export default router;
