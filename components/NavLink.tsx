import Link from 'next/link';

type NavLinkProps = {
    text: string,
    path: string,
    type: "primary" | "secondary"
}

const NavLinkStyles = {
    "primary": "bg-blue-800 text-white",
    "secondary": "bg-gray-300"
}

const NavLink:React.FC<NavLinkProps> = ({ text, path, type }) => {
    let className = `nav-link p-1 rounded ${NavLinkStyles[type]}`

    return (
        <Link href={path}>
            <a className={className}>{text}</a>
        </Link>
    )
}

export default NavLink;