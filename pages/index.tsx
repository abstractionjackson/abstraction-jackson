import type { NextPage } from 'next'

import { Layout } from '../components/Layout'
import { NavLinkData } from './api/v1/home'

const Home: NextPage<{
  links: NavLinkData[],
  tagline: string,
  siteTitle: string
}> = ({
  links,
  tagline='',
  siteTitle='Abstraction Jackson'
}) => {
  return (
    <Layout headerText={siteTitle} navBarLinks={links} taglineText={tagline}>
      {
        null
      }
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  try {
      const res = await fetch('http://localhost:3000/api/v1/home');
      const { links, tagline, siteTitle } = await res.json();
      return {
          props: {
              links,
              tagline,
              siteTitle
          }
      }
  } catch (error) {
      return {
          notFound: true
      }
  }
}
