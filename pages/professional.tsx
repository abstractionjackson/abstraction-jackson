import Hero from "../components/Hero"
import { Layout } from "../components/Layout"
import { OneLiner } from "../components/One-Liner"
import Card from "../components/Card"
import CardData from '../utils/Card'

const Professional:React.FC<{cards: CardData[], tagline:string}> = ({ cards, tagline}) => {
    return (
        <Layout>
            <Hero text={"🤵🏼‍♂️Professional"} />
            <OneLiner text={tagline} />
            <ul className="professional-cards p-3">
                {
                    cards.map((data, i) => {
                        const contentLayout = i % 2 === 0 ? 'ltr' : 'rtl' // reverse the layout on alterate card
                        return (
                            <li className="card" key={i}>
                                <Card contentLayout={contentLayout} {...data} />
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    let endpoint = 'http://localhost:3000/api/v1/resume/cards'
    try {
        let res = await fetch(endpoint)
        const { cards } = await res.json();
        endpoint = 'http://localhost:3000/api/v1/resume/tagline'
        res = await fetch(endpoint);
        const { tagline } = await res.json()
        return {
            props: {
                tagline,
                cards
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}

export default Professional