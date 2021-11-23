import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { NavLinkData } from '../utils/Page'

//TODO dynamically render layout from route

const links = [
  new NavLinkData('/', 'Home'),
  new NavLinkData('/follow', 'Follow'),
  new NavLinkData('/about', 'About'),
  new NavLinkData('/portfolio', "Portfolio")
]


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout navBarLinks={links}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
