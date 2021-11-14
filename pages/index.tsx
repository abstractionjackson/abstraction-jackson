import type { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto rounded-full bg-black overflow-hidden h-1/3 w-1/3">
        <Image src='/profile.png' height='1028' width='1028' layout='responsive' />
      </div>
    </Layout>
  )
}

export default Home
