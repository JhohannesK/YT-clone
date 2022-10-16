import express from 'express';
import {
	getRecommendedVideos,
	getTrendingVideos,
} from '../controllers/videoControllers';
const router = express.Router();

router.get('/', getRecommendedVideos);
router.get('/trending', getTrendingVideos);
// Upload a video
// Delete a video
// Edit a video

export default router;
