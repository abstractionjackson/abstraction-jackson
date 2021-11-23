import { NextPage } from "next";
import { Layout } from "../components/Layout"
import LinkImSoc from '../components/LinkImageSocial'
import { getPage } from "../utils/s3/getPage";
import SocialMediaLink from "../utils/SocialMediaLink";

interface IFollowProps {
    header: string;
    links: SocialMediaLink[]
}

export const Follow: NextPage<IFollowProps> = ({
    header,
    links=[]
}) => (
    <div className="max-w-lg mx-auto w-full">
    {
        links.map((props, key) => <LinkImSoc {...props} key={key}  />)
    }
    </div>
)

export default Follow;

export async function getStaticProps() {
    let response;
    const slug = 'follow';
    try {
        response = await getPage(slug);
        if ( response ) {
            return {
                props: JSON.parse(response)
            }
        }
    } catch (error) {
        console.error(error)
        return {
            notFound: true
        }
    }
}