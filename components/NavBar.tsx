import Link from 'next/link';

import { NavLinkData } from "../utils/Page";


type NavBarProps = {
    links?: NavLinkData[];
    headerText: string;
    descriptionText: string;
}
const NavBar:React.FC<NavBarProps> = ({
    links=[],
    headerText,
    descriptionText
}) => {
    // do stuff
    return (
        <div className="container mx-auto max-w-lg">
            
            <div className="text-3xl text-black">{headerText}</div>

            <nav>
                <ul className="flex">
                    {
                        links.map(({ href, text }, key) => (
                            <Link href={href} key={key}>
                                <a className='px-1 hover:underline'>{text}</a>
                            </Link>
                        ))
                    }
                </ul>
            </nav>

            <div className="text-gray-500 italic">{descriptionText}</div>

        </div>
    )
};

export default NavBar;