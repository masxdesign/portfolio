import NavLink from "@/Components/NavLink"
import { Head, Link } from "@inertiajs/react"
import { PropsWithChildren } from "react"

type Props = {
    title: string
} 

const links = [
    ['Home', 'home'],
    ['About', 'dashboard'],
    ['Works', 'dashboard'],
    ['Contact', 'dashboard'],
]

const SiteLayout = ({ children, title }: PropsWithChildren<Props>) => (
    <>
        <Head title={title} />
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-16">
                <Link href={route("home")} className="text-slate-900 text-xl font-bold mr-32">
                    Masxdesign
                </Link>
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
            <div className="bg-gradient-to-r from-red-600 to-sky-700 h-1 font-bold text-lg shadow-xl" />
            {children}
        </div>
    </>
)

export default SiteLayout