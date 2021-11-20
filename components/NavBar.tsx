import { NavLinkData } from "../pages/api/v1/home"
import NavLink from "./NavLink";

type NavBarProps = {
    links?: NavLinkData[];
}
export const NavBar:React.FC<NavBarProps> = ({ links=[] }) => {
    return (
            <nav>
                <ul className="flex">
                    {
                        links.map((data, i) => <NavLink key={i} {...data} />)
                    }
                </ul>
            </nav>
    )
};
