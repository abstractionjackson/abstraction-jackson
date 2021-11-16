import Image from 'next/image'

export type CardImage = {
    path: string,
    height: string,
    width: string
}

type CardProps = {
    title: string,
    image: CardImage,
    text: string,
    contentLayout: 'ltr' | 'rtl'
}

export const Card:React.FC<CardProps> = ({
    title,
    image: {
        path,
        height,
        width
    },
    text,
    contentLayout = "ltr"
}) => {
    const flexDirection = contentLayout === 'ltr' ? 'flex-row' : 'flex-row-reverse'
    return (
        <div className="card w-full p-3 mt-3 bg-translucent">
            <h1 className="card card-title text-2xl text-center">{title}</h1>
            <div className={`card card-content flex ${flexDirection}`}>
                <div className="card card-image p-3 w-1/3 m-auto">
                    <Image src={path} height={height} width={width} layout="responsive" />
                </div>
                <p className="card card-text p-3 rounded w-2/3">{text}</p>
            </div>
        </div>
    )
};

export default Card;