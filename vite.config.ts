// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
// import path from 'path';
// // import { VitePWA } from 'vite-plugin-pwa';
// // https://vite.dev/config/
// export default defineConfig({
// 	plugins: [
// 		react(),
// 		tailwindcss(),
// 		// VitePWA({
// 		// 	registerType: 'autoUpdate',
// 		// 	manifest: {
// 		// 		name: 'Polaroweb',
// 		// 		short_name: 'Polaroweb',
// 		// 		description: 'Website Polaroweb PWA',
// 		// 		theme_color: '#ffffff',
// 		// 		background_color: '#ffffff',
// 		// 		display: 'standalone',
// 		// 		scope: '/',
// 		// 		start_url: '/',
// 		// 		icons: [
// 		// 			{
// 		// 				src: '/pwa-192x192.png',
// 		// 				sizes: '192x192',
// 		// 				type: 'image/png',
// 		// 			},
// 		// 			{
// 		// 				src: '/pwa-512x512.png',
// 		// 				sizes: '512x512',
// 		// 				type: 'image/png',
// 		// 			},
// 		// 			{
// 		// 				src: '/pwa-512x512.png',
// 		// 				sizes: '512x512',
// 		// 				type: 'image/png',
// 		// 				purpose: 'any maskable',
// 		// 			},
// 		// 		],
// 		// 	},
// 		// 	workbox: {
// 		// 		cleanupOutdatedCaches: true,
// 		// 		sourcemap: true,
// 		// 	},
// 		// }),
// 	],
// 	resolve: {
// 		alias: {
// 			'@': path.resolve(__dirname, './src'),
// 		},
// 	},

// });

// vite.config.ts
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	preview: {
		https: {
			key: fs.readFileSync('cert/key.pem'),
			cert: fs.readFileSync('cert/cert.pem'),
		},
		port: 4173,
	},
});
