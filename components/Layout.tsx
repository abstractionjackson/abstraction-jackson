import { NavLinkData } from "../pages/api/v1/home"
import { NavBarHeader } from "./NavBarHeader"
export const Layout: React.FC<{
    headerText?: string
    taglineText?: string
    navBarLinks?: NavLinkData[]
}> = ({
    children,
    headerText="Abstraction Jackson",
    taglineText="When the rabbit hole goes deep...",
    navBarLinks=[]
 }) => {
    return (
        <div className="pt-3 px-3 flex flex-col justify-center h-full w-full overflow-auto">
            <NavBarHeader
                headerText={headerText}
                taglineText={taglineText}
                navBarLinks={navBarLinks}
            />
            { children }
        </div>
    )
}