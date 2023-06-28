import './bootstrap';
import '../css/app.css'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import inertiaAppResolver from './utilities/inertiaAppResolver';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title:  (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const page = await resolvePageComponent<{}>(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'))
        return inertiaAppResolver(page)
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
