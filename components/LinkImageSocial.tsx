import Image from 'next/image';

interface ILinkImageSocial {
    icon: string;//path to the svg image
    id: string;//the account name
    isHandle: boolean;
    href: string;
    key: number;
}

const LinkImageSocial:React.FC<ILinkImageSocial>=({
    icon,
    id,
    isHandle,
    href,
    key
})=>(
    //return an svg image, and link to the account
        <a className="text-sm mt-3" key={key} href={href}>
            <img src={`/icon/${icon}`} style={{
                height: '3rem',
                width: '3rem',
                marginTop: '0.75rem'
            }}/>
        </a>
);

export default LinkImageSocial;