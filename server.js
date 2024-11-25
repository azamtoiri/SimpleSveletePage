import express from 'express';
import { handler } from './build/handler.js';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3000;
app.use(
	'/api',
	createProxyMiddleware({
		target: process.env.VITE_API_URL || 'http://localhost:8000', // Использование переменной окружения для API
		changeOrigin: true,
		secure: false // Отключение проверки SSL для самоподписанных сертификатов
	})
);
app.get('/expressroute', (req, res) => {
	res.send('This is an express route');
});

app.use(handler);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
