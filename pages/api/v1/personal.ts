// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Card from '../../../utils/Card'

type Data = {
  cards: Card[]
}

//TODO - migrate to db
const cards = [
    new Card({
        title: "Appearances",
        image: {
            path:'/appearances.png',
            height: '400',
            width: '400'
        },
        text: 'lorem ipsum'
    }),
    new Card({
        title: "Cycling",
        image: {
            path:'/cycling.png',
            height: '400',
            width: '400'
        },
        text: 'lorem ipsum'
    }),
    new Card({
        title: "Two Wheels",
        image: {
            path:'/two_wheels.png',
            height: '400',
            width: '400'
        },
        text: 'lorem ipsum'
    }),
    new Card({
        title: "Fashion",
        image: {
            path:'/fashion.png',
            height: '400',
            width: '400'
        },
        text: 'lorem ipsum'
    }),
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ cards })
}
