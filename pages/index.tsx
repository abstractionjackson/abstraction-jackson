import type { NextPage } from 'next'
import { GetObjectCommand } from '@aws-sdk/client-s3'
import { Layout } from '../components/Layout'
import { streamToString } from '../utils/streamToString'
import client from '../config/s3.config'

const Home: NextPage<{
  header:string,
  description:string
}> = ({
  header,
  description
}) => {
  return (
    <div className="wip"></div>
  )
}

export default Home

export async function getStaticProps() {
  //get data from s3
const params = {
    Bucket: process.env.AWS_S3_BUCKET || 'abstraction-jackson',
    Key: 'page/index.json'
};

const command = new GetObjectCommand(params);

try {
  const response = await client.send(command);
  const data:string = await streamToString(response.Body);
  return({
    props: JSON.parse(data)
  })
} catch (error) {
  console.error("ERR", error)
  return {
    notFound: true
  }
}
}
