import type {PortfolioItem, SocialMediaItem} from './types'
export const SITE_TITLE = 'Abstraction Jackson'
export const PORTFOLIO: {
    items: PortfolioItem[]
} = {
    items: [
        {
            name:'CyncHealth',
            href: "https://cynchealth.org/",
            title: 'Front-end Developer',
            image: {
                "src": "https://abstraction-jackson.s3.us-west-1.amazonaws.com/images/portfolio/cync.png",
                "alt": "covid data visualization",
                "height": 796,
                "width": 484,
                caption: 'Covid Hospital Data Visualization Dashboard'
            }
        },
        {
            name:'Syngenta',
            href: "https://www.ghxseed.com/",
            title: 'Developer',
            image: {
                "src": "https://abstraction-jackson.s3.us-west-1.amazonaws.com/images/portfolio/ghx.png",
                "height": 796,
                "width": 371,
                "alt": "ghx-dashboard-mobile",
                "caption": 'Agricultural Contracts Management Console'
            }
        },
       {
            name:'Blast, Inc.',
            href: "https://sendablast.io",
            title: 'Software Engineer',
            image: {
                "src": "https://abstraction-jackson.s3.us-west-1.amazonaws.com/images/portfolio/blast.png",
                "height": 700,
                "width": 650,
                "alt": "blast-app-preview",
                "caption": 'Event Coordination and Social Messaging Platform'
            }
        },
    ]
}
export const SOCIAL: SocialMediaItem[] = [
    {
        platform: {
            name: 'Spotify',
            homepage: new URL('https://www.spotify.com/')
        },
        account: {
            profile: new URL('https://open.spotify.com/user/1219301139'),
        },
        icon: {
            fontAwesome: 'fab fa-spotify'
        }
    },
    {
        platform: {
            name: 'GitHub',
            homepage: new URL('https://github.com/')
        },
        account: {
            profile: new URL('https://github.com/abstractionjackson'),
        },
        icon: {
            fontAwesome: 'fab fa-github'
        }
    },
    {
        platform: {
            name: 'Stack Overflow',
            homepage: new URL('https://stackoverflow.com/')
        },
        account: {
            profile: new URL('https://stackoverflow.com/users/12140368/jackson-galan'),
        },
        icon: {
            fontAwesome: 'fab fa-stack-overflow'
        }
    },
    {
        platform: {
            name: 'Facebook',
            homepage: new URL('https://www.facebook.com/')
        },
        account: {
            profile: new URL('https://www.facebook.com/jacksonlgalan'),
        },
        icon: {
            fontAwesome: 'fab fa-facebook'
        }
    },
    {
        platform: {
            name: 'Strava',
            homepage: new URL('https://www.strava.com/')
        },
        account: {
            profile: new URL('https://www.strava.com/athletes/7088902'),
        },
        icon: {
            fontAwesome: 'fab fa-strava'
        }
    },
    {
        platform: {
            name: 'Twitter',
            homepage: new URL('https://twitter.com/')
        },
        account: {
            profile: new URL('https://twitter.com/whycertainly'),
        },
        icon: {
            fontAwesome: 'fab fa-twitter'
        }
    },
]