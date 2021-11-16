import { useRouter } from "next/dist/client/router"
import Link from "next/dist/client/link"

export const Layout: React.FC = ({ children }) => {
    const router = useRouter()
    return (
        <div className="pt-3 px-3 h-full w-full absolute bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 overflow-auto">
            { router.pathname !== '/' ? (
                <Link href='/'>
                    <img src="/home.svg" height='129' width='128' />
                </Link>
            ):null}
            { children }
            </div>
    )
}