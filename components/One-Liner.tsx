
type OneLinerProps = {
    text: string
}

export const OneLiner:React.FC<OneLinerProps> = ({ text }) => {
    return (
            <div className="container bg-translucent rounded p-3 mx-auto text-gray-800 text-lg italic">
                { text }
            </div>
    )
}