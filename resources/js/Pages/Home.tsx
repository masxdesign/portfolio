import SiteLayout from '@/Layouts/SiteLayout';
import { PageProps } from '@/types';
import React from 'react';

const Home = ({ auth }: PageProps) => {
    return (
        <>
            <div className="rounded-lg shadow-lg max-w-7xl mx-auto overflow-hidden">
                <div className="bg-sky-900 p-16">
                    <div className="max-w-lg pt-16">
                        <h1 className="text-white text-4xl font-bold mb-3">
                            We Develop Software that Inspire
                        </h1>
                        <p className='text-amber-200'>
                            Everyone is trying to run an online business nowadays that's because there are many benefits to it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Welcome" />

export default Home