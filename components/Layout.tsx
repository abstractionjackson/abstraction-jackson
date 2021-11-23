import { NavLinkData } from "../utils/Page"
import NavBar from '../components/NavBar'

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
            <NavBar
                headerText={headerText}
                descriptionText={descriptionText}
                links={navBarLinks}
            />
            { children }
        </div>
    )
}