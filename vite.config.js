import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'dist'
	},
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: process.env.VITE_API_URL || 'http://localhost:8000', // Использует URL из env или localhost по умолчанию
				changeOrigin: true,
				secure: false
			}
		}
	}
});
