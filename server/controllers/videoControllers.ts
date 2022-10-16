import { NextFunction, Request, Response } from 'express';
import { PrismaClient, Video } from '@prisma/client';
const prisma = new PrismaClient();

// Function to count views per video.
const getVideoViewsCount = async (videos: Video[]) => {
	try {
		for (const video of videos) {
			const views = await prisma.view.count({
				where: {
					videoId: {
						equals: video.id,
					},
				},
			});
			video.numOfViews = views;
		}

		return videos;
	} catch (error) {
		console.log(error);
	}
};

// Controller to get all recommended videos for a user.
export const getRecommendedVideos = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const videos = await prisma.video.findMany({
			include: {
				user: {
					select: {
						username: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		if (!videos.length) {
			return res.json(videos);
		}

		const vidoesWithCounts = await getVideoViewsCount(videos);
		res.json(vidoesWithCounts);
	} catch (error) {
		next(error);
	}
};

// Controller to get all trending videos
export const getTrendingVideos = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const videos = await prisma.video.findMany({
			include: {
				user: {
					select: {
						username: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});

		if (!videos.length) {
			return res.json(videos);
		}

		const videosWithCounts = await getVideoViewsCount(videos);
		if (videosWithCounts) {
			videosWithCounts.sort((a, b) => b.numOfViews - a.numOfViews);
		}
		res.json(videosWithCounts);
	} catch (error) {
		next(error);
	}
};
