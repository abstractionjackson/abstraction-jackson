type PortfolioImage = {
    src: string,
    height: number,
    width: number,
    alt: string
    caption: string
}

export type PortfolioItem = {
    name:string,
    href: string,
    title: string,
    image: PortfolioImage
}

export type SocialMediaItem = {
    platform: {
        name: string,
        homepage?: URL
    },
    account: {
        profile: URL,
    },
    icon: {
        fontAwesome: string
    }
}