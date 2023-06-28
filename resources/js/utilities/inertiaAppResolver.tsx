import SiteLayout from '../Layouts/SiteLayout';

const inertiaAppResolver = (page: {}) => {
    return {
        ...page,
        default: {
            // @ts-expect-error
            layout: page.default.layout || ((page) => <SiteLayout children={page} title="Welcome" />)
        }
    }
}

export default inertiaAppResolver