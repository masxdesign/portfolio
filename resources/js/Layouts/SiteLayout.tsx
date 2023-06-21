import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

type Props = {
    title: string
} 

const links = [
    ['Home'],
    ['About'],
    ['Works'],
    ['Contact'],
]

const SiteLayout = ({ children, title }: PropsWithChildren<Props>) => (
    <>
        <Head title={title} />
        <div className="min-h-screen bg-slate-200">
            <div className="bg-gradient-to-r from-red-600 to-sky-700 h-1 font-bold text-lg shadow-xl">
            </div>
            <div className="flex items-center justify-between w-100 bg-white h-16 px-8">
                <div className="text-slate-900 text-md font-bold p-3">
                    Masxdesign
                </div>
                <div className="flex text-gray-400 items-center">
                    {links.map(([label]) => (
                        <a 
                            key={label} 
                            href="http://d" 
                            className="px-8 font-bold text-sm"
                        >
                            {label}
                        </a> 
                    ))}
                </div>
            </div>
            {children}
        </div>
    </>
)

export default SiteLayout