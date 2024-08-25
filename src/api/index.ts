
import express from 'express';
import { createBlog, getAllBlogs } from './blog.controller';

const router = express.Router();

export default router;


router.post('/blogs', createBlog);
router.get('/blogs', getAllBlogs);