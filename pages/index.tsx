import type { NextPage } from 'next'

import { Layout } from '../components/Layout'
import ProfileImage from '../components/ProfileImage'
import NavButton from '../components/NavButton'

const Home: NextPage = () => {
  return (
    <Layout>
      <ProfileImage />
      <nav className="container mx-auto p-3 flex justify-center">
        <NavButton text='Professional' path='/pro' type="primary"/>
        <NavButton text='Personal' path='/personal'type="outline" />
      </nav>
    </Layout>
  )
}

export default Home
