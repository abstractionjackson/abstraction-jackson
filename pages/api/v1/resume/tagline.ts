import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    tagline: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ tagline:"Software Engineer Jackson Galan began his professional career in the Exploratorium, demonstrating scientific exhibits to San Francisco museum-goers. In 2014, a fateful luncheon among the Engineering team of music startup PonoMusic catalysed his transition to computer science, and web development. After completing a course at Hack Reactor, he began developing chat, agriculture, and healthcare applications in modern JavaScript frameworks. Now, he's looking for a developer role that will leverage his skills and impact technology. 🐝" })
  }
  