import { CardImage } from "../components/Card";

interface ICard {
    title: string
    image:CardImage
    text:string
}
class Card {
    public title: string;
    public image: CardImage;
    public text: string;
    constructor({
        title,
        image,
        text
    }: ICard) {
        this.title = title;
        this.image = image;
        this.text = text;
    }
}

export default Card;