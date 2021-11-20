

interface ICard {
    link: CardLink
    image:CardImage
    text:string
}
type CardLink = {
    linkText: string,
    href: string
}
type CardImage = {
    src: string,
    height: string,
    width: string,
    alt: string
    container: {
        containerHeight: string,
        containerWidth: string
    }
}
class Card {
    constructor(
        public link:CardLink,
        public text: string,
        public image: CardImage
    ){}
}

export default Card;