import { NextFunction, Request, Response } from 'express';
import { PrismaClient, User, Video, View } from '@prisma/client';
import { count } from 'console';
import { resolve } from 'path';
const prisma = new PrismaClient();

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

export const getRecommendedVideos = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let videos = await prisma.video.findMany({
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

		const aa = await getVideoViewsCount(videos);
		res.json(aa);
	} catch (error) {
		next(error);
	}
};
