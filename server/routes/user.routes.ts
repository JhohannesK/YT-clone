import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';
import { getAllUsers } from '../controllers/userControllers';

const prisma = new PrismaClient();

router.get('/', getAllUsers);

export default router;
