import express from 'express';
import { getRecommendedVideos } from '../controllers/videoControllers';
const router = express.Router();

router.get('/', getRecommendedVideos);

export default router;
