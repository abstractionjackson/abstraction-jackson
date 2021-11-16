import Link from 'next/link';

type NavButton = {
    text: string,
    path: string,
    type: "primary" | "secondary" | "outline"
}

const NavButtonStyles = {
    "primary": "bg-blue-800 text-white",
    "secondary": "bg-gray-300",
    "outline": "bg-none border-2 border-black"
}

const NavButton:React.FC<NavButton> = ({ text, path, type }) => {
    let className = `nav-btn p-3 mx-1 rounded ${NavButtonStyles[type]}`

    return (
        <Link href={path}>
            <a className={className}>{text}</a>
        </Link>
    )
}

export default NavButton;