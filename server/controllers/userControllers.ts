import { PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
const prisma = new PrismaClient();

export const getAllUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users = await prisma.user.findMany({
			include: {
				subscribers: true,
			},
		});
		res.json({
			status: true,
			data: users,
		});
	} catch (error) {}
};
