import { NavLinkData } from "../utils/Page"
import { NavBarHeader } from "./NavBarHeader"
export const Layout: React.FC<{
    headerText?: string
    descriptionText?: string
    navBarLinks?: NavLinkData[]
}> = ({
    children,
    headerText="Abstraction Jackson",
    descriptionText="Welcome to software developer, cyclist, and musician Jackson Galan online.",
    navBarLinks=[]
 }) => {
    return (
        <div className="pt-3 px-3 flex flex-col justify-center h-full w-full overflow-auto">
            <NavBarHeader
                headerText={headerText}
                descriptionText={descriptionText}
                navBarLinks={navBarLinks}
            />
            { children }
        </div>
    )
}