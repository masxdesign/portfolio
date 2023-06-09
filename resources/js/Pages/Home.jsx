import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="container mx-auto px-6 p-10">
                <h1 className="text-center text-gray-800 mb-8">Masxdesign</h1>
                <p className="text-base">ffdfkjfdf</p>
                <a href={route('dashboard')}>Dashboard</a>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 text-white rounded-md p-3 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <h2>ffjf</h2>
                        fff
                    </div>
                    <div className='w-full sm:w-1/2 bg-gray-200'>
                        dksfdjfjd
                    </div>
                </div>
            </div>
        </>
    );
}
