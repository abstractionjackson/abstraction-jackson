import Link from 'next/link';


const NavLink:React.FC<{
    text: string,
    href: string
}> = ({ text, href }) => {

    return (
        <Link href={href}>
            <a className='px-1 hover:underline'>{text}</a>
        </Link>
    )
}

export default NavLink;