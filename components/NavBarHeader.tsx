import { NavLinkData } from "../utils/Page";
import Header from "./Header";
import { NavBar } from "./NavBar";

type NavBarHeaderProps = {
    navBarLinks?: NavLinkData[];
    headerText: string;
    descriptionText: string;
}
export const NavBarHeader:React.FC<NavBarHeaderProps> = ({
    navBarLinks=[],
    headerText,
    descriptionText
}) => {
    // do stuff
    return (
        <div className="container mx-auto max-w-lg">
            
            <Header text={headerText} />

            <NavBar links={navBarLinks} />

            <div className="text-gray-500 italic">{descriptionText}</div>

        </div>
    )
};
