import { NextPage } from "next";
import { Card } from "../components/Card";
import props from '../public/page/portfolio.json'
import { ICard } from "../utils/Card";

interface IPorfolioProps {
    cards: ICard[]
}
export const Portfolio:NextPage<IPorfolioProps> = ({
    cards
}) => {
    // render static HTML
    const headerText = "Engineering Portfolio"
    const tagline = "Professional development samples"

    return (
        <div className="container max-w-lg mx-auto pt-3">
            {
                cards.map((data,key) => <Card key={key} {...data} />)
            }
        </div>
    )
}

export async function getStaticProps() {
    return {
        props
    }
    
}
export default Portfolio;