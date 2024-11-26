import express from 'express';

// Constants
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
const { createServer } = await import('vite');
vite = await createServer({
	server: { middlewareMode: true },
	base
});
app.use(vite.middlewares);

// Start http server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
