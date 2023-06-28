import SiteLayout from '../Layouts/SiteLayout';

// @ts-expect-error
const inertiaAppResolver = (page) => {
    // @ts-expect-error
    page.default.layout = page.default.layout || ((page) => <SiteLayout children={page} title="Welcome" />)

    return page
}

export default inertiaAppResolver