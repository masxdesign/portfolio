import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
// @ts-expect-error
import route from 'ziggy';
import inertiaAppResolver from './utilities/inertiaAppResolver';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: async (name) => {
            const page = await resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'))
            return inertiaAppResolver(page)
        },
        setup: ({ App, props }) => {
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    // @ts-expect-error
                    ...page.props.ziggy,
                    // @ts-expect-error
                    location: new URL(page.props.ziggy.location),
                });

            return <App {...props} />;
        },
    })
);
