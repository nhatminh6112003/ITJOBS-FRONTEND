import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import reactPlugin from '@vitejs/plugin-react-swc';
import path from 'path';
// import compression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		react({
			include: '**/*.jsx'
		})
	],
	server: {
		watch: {
			usePolling: true
		},
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://localhost:8085',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},

	resolve: {
		alias: [
			{
				find: '~',
				replacement: path.resolve(__dirname, 'src')
			}
		]
	}
});
