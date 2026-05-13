import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/foods/', // GitHub Pages 배포 경로 (repo 이름)
    build: {
        outDir: 'build',
        sourcemap: false,
    },
    plugins: [
        react()
    ],
});