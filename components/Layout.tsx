
export const Layout: React.FC = ({ children }) => {
    return (
        <div className="pt-3 h-full w-full absolute bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300">{ children }</div>
    )
}