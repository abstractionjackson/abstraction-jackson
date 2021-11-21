import type { NextPage } from 'next'

import { Layout } from '../components/Layout'
import { NavLinkData } from './api/v1/home'

const tagline:string = 'When the rabbit hole grows deep...'

const siteTitle:string = "Abstraction Jackson"

const links = [
    new NavLinkData('/', 'Home'),
    new NavLinkData('/follow', 'Follow'),
    new NavLinkData('/about', 'About'),
    new NavLinkData('/portfolio', "Portfolio")
]

const Home: NextPage = () => {
  return (
    <Layout headerText={siteTitle} navBarLinks={links} taglineText={tagline}>
      {
        null
      }
    </Layout>
  )
}

export default Home
