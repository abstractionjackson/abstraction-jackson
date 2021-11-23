
export interface ICard {
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