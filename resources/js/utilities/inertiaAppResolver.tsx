import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import SiteLayout from '../Layouts/SiteLayout';

const inertiaAppResolver = async (name: string) => {
    let page = await resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'))

    // @ts-expect-error
    page.default.layout = page.default.layout || ((page) => <SiteLayout children={page} title="Welcome" />)
    
    return page
}

export default inertiaAppResolver