import './bootstrap';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import SiteLayout from './Layouts/SiteLayout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

export const inertiaAppResolver = async (name: string) => {
    let page = await resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'))

    // @ts-expect-error
    page.default.layout = page.default.layout || ((page) => <SiteLayout children={page} title="Welcome" />)
    
    return page
}

createInertiaApp({
    title:  (title) => `${title} - ${appName}`,
    resolve: inertiaAppResolver,
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
