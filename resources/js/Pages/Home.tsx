import SiteLayout from '@/Layouts/SiteLayout';
import { PageProps } from '@/types';
import React from 'react';

const Home = ({ auth }: PageProps) => {
    return (
        <>
            <div className="flex bg-blue-800 bg-hero-pattern h-[600px]">
            </div>
            <div className="border-white border-4 bg-blue-200 p-4 rounded-xl -mt-16 shadow-lg mx-auto max-w-[700px]">
                <h1 className="text-gray-800 text-2xl font-bold">
                    We Develop Software that Inspire
                </h1>
                <p>
                    Everyone is trying to run an online business nowadays that's because there are many benefits to it.
                </p>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Welcome" />

export default Home