import express from 'express';
import ViteExpress from 'vite-express';

// Constants
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Create http server
const app = express();
ViteExpress.config({ mode: 'production' });

// Add Vite or respective production middlewares
let vite;
const { createServer } = await import('vite');
vite = await createServer({
	server: { middlewareMode: true },
	base
});
app.use(vite.middlewares);

ViteExpress.listen(app, 3000, () => console.log(`Server is listening...${port}`));
