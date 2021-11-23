import Image from 'next/image';

import { ICard } from '../utils/Card';

export const Card:React.FC<ICard> = ({
    link: {
        linkText,
        href
    },
    text,
    image: {
        src,
        alt,
        height,
        width,
        container: {
            containerHeight,
            containerWidth
        }
    }
}) => (
    <div className="container flex flex-col">
        <a href={href} className="hover:underline text-2xl text-blue-800">{linkText}</a>
        <p className="italic text-lg text-gray-700">{text}</p>
        <div style={{
            maxHeight: containerHeight,
            maxWidth: containerWidth
        }}>
            <a href={src}>

            <Image src={src} height={height} width={width} layout='responsive' alt={alt} />
            </a>
        </div>
    </div>
)