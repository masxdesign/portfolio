import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx',
                'resources/css/app.css'
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: "setupTests.js"
    },
    resolve: {
        alias: {
            ziggy: 'vendor/tightenco/ziggy/dist/index.m.js',
        },
    },
});
