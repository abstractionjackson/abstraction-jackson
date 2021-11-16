import { Layout } from "../components/Layout"
import Hero from "../components/Hero"
import { OneLiner } from "../components/One-Liner"
import Card from '../components/Card'
import CardData from '../utils/Card'

type PersonalProps = {
    cards: CardData[]
}

const Personal:React.FC<PersonalProps> = ({ cards }) => {
    return (
        <Layout>
            <Hero text={"TODO Personal"} />
            <OneLiner text={'todo'} />
            <div className="personal-cards p-3">
                {
                    cards.map((data, i) => {
                        const contentLayout = i % 2 === 0 ? 'ltr' : 'rtl' // reverse the layout on alterate card
                        return (
                            <Card contentLayout={contentLayout} {...data} />
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    //fetch personal cards from the API
    const endpoint = 'http://localhost:3000/api/v1/personal'
    try {
        const res = await fetch(endpoint)
        const { cards} = await res.json()
        return { props: { cards }}
    } catch (error) {
        return { notFound: true }
    }
}

export default Personal