import NavLink from "@/Components/NavLink"
import { Head, Link } from "@inertiajs/react"
import { PropsWithChildren } from "react"

type Props = {
    title: string
} 

const links = [
    ['Home', 'home'],
    ['About', 'dashboard'],
    // ['Works', 'work'],
    // ['Contact', 'contact'],
]

const SiteLayout = ({ children, title }: PropsWithChildren<Props>) => (
    <>
        <Head title={title} />
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-red-600 to-sky-700 h-1 font-bold text-lg shadow-xl">
            </div>
            <div className="w-100 bg-white mb-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-8">
                    <div className="to-red-200 from-red-600 bg-gradient-to-r -mt-10">
                        <Link href={route("home")} className="text-white text-md font-bold p-3">
                            Masxdesign
                        </Link>
                    </div>
                    <div className="flex text-gray-400 items-center">
                        {links.map(([label, name]) => (
                            <NavLink 
                                key={label} 
                                href={route(name)}
                                active={route().current(name)}
                            >
                                {label}
                            </NavLink> 
                        ))}
                    </div>
                </div>
            </div>
            {children}
        </div>
    </>
)

export default SiteLayout