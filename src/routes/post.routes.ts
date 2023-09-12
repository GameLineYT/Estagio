import { Router } from 'express';
import {getPosts, createPost, getPostOneId, deletePost, updatePost} from '../controllers/post.controller';
const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:postId')
    .get(getPostOneId)
    .delete(deletePost)
    .put(updatePost)

export default router;