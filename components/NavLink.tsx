import Link from 'next/link';
import { NavLinkData } from '../pages/api/v1/nav';


const NavLink:React.FC<NavLinkData> = ({ text, href }) => {

    return (
        <Link href={href}>
            <a className='px-1 hover:underline'>{text}</a>
        </Link>
    )
}

export default NavLink;