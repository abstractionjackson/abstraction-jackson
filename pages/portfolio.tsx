import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import CardData from "../utils/Card";

export const Portfolio:NextPage = () => {
    // render static HTML
    const headerText = "Engineering Portfolio"
    const tagline = "Professional development samples"
    const cards = [
        new CardData({
            linkText:'CyncHealth',
            href:'https://cynchealth.org/'
        }, 'Covid Hospital Data', {
            src: 'https://www.arcgis.com/sharing/rest/content/items/d83ad06141fe4acd9a0461020f9d9d8e/resources/covid-dashboard-20211119.png?v=1637435827918&w=1600',
            alt: 'covid data visualization',
            height: '796',
            width: '484',
            container: {
                containerHeight: '398px',
                containerWidth:'242px'
            }
        }),
        new CardData({
            linkText:"Syngenta",
            href: 'https://www.ghxseed.com/'
        }, "Agriculture Contract Dashboard", {
            src: 'https://www.ghxseed.com/sites/g/files/zhg1716/f/media-wysiwyg/2021/07/14/component31-1_1.png',
            height: '796',
            width: '371',
            alt:'ghx-dashboard-mobile',
            container: {
                containerHeight: '398px',
                containerWidth: '175px'
            }
        }),
        new CardData({
            linkText: 'Blast, Inc.',
            href: 'https://sendablast.io'
        }, "Event Discovery for Web and Mobile", {
            src: 'https://sendablast.io/static/media/hero1.f13a5e19.png',
            height: '700',
            width: '650',
            alt: 'blast-app-preview',
            container: {
                containerWidth: '325px',
                containerHeight:'350px'
            }
        })
    ]
    // TODO - lift layout props to store
    return (
        <Layout headerText={headerText} taglineText={tagline} navBarLinks={[{text:'Home', href:'/'}]}>
            <div className="container max-w-lg mx-auto pt-3">
                {
                    cards.map((data,key) => <Card key={key} {...data} />)
                }
            </div>
        </Layout>
    )
}

export default Portfolio;