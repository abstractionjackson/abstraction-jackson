import { NavLinkData } from "../pages/api/v1/home"
import Header from "./Header";
import { NavBar } from "./NavBar";
import { Tagline } from "./Tagline";

type NavBarHeaderProps = {
    navBarLinks?: NavLinkData[];
    headerText: string;
    taglineText: string;
}
export const NavBarHeader:React.FC<NavBarHeaderProps> = ({
    navBarLinks=[],
    headerText,
    taglineText
}) => {
    // do stuff
    return (
        <div className="container mx-auto max-w-lg">
            
            <Header text={headerText} />

            <NavBar links={navBarLinks} />

            <Tagline text={taglineText} />

        </div>
    )
};
