// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Card from '../../../../utils/Card'

type Data = {
  cards: Card[]
}

const cards = [
    new Card({
        title: "Exploratorium",
        image: {
            path: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.fresyes.com%2Fwp-content%2Fuploads%2F2018%2F04%2FACS_0025-1.jpg%3Ffit%3D4032%252C3024%26ssl%3D1&f=1&nofb=1',
            height: '4032',
            width: '3024'
        },
        text: "Explainer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }),
    new Card({
        title: "PonoMusic",
        image: {
            path: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.gadgetsin.com%2F2014%2F03%2Fponomusic_ponoplayer_high_resolution_music_player_1.jpg&f=1&nofb=1',
            height: '400',
            width: '600'
        },
        text: "Office Manager Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }),
    new Card({
        title: "Operation Spark",
        image: {
            path: 'https://wgno.com/wp-content/uploads/sites/2/2021/10/32529d6a63224bf88ae25ca0540da914.jpg?w=1752&h=986&crop=1',
            height: '400',
            width: '600'
        },
        text: "Developer-Instructor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    })
]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ cards })
}
