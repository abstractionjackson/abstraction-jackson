
export type HeroProps = {
    text: string
}
export const Hero:React.FC<HeroProps> = ({ text }) => {
    return (
            <h1 className="py-28 px-3 text-6xl text-white">{text}</h1>
    )
}

export default Hero