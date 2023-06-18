import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

type Props = {
    title: string
} 

const SiteLayout = ({ children, title }: PropsWithChildren<Props>) => (
    <>
        <Head title={title} />
        <div className="min-h-screen bg-gray-200">
            <div className="bg-gradient-to-r from-pink-600 to-blue-600 p-1" />
            <div className="bg-white">
                <div className="p-3 font-bold text-lg">
                    Masxdesign
                </div>
            </div>
            {children}
        </div>
    </>
)

export default SiteLayout