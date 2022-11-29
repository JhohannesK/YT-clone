import express from 'express';
import getAuthRoutes from './routes/auth.routes';
import getVideoRoutes from './routes/video.routes';
import getUserRoutes from './routes/user.routes';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.get('/', async (req, res) => {
	res.send('This is the Youtube clone');
});

app.use('/api/v1/auth', getAuthRoutes);
app.use('/api/v1/user', getUserRoutes);
app.use('/api/v1/video', getVideoRoutes);

app.listen(PORT, () => {
	console.log(`App running on port: ${PORT}`);
});
