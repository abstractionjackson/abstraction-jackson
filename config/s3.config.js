import { S3Client } from "@aws-sdk/client-s3"
const client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || ''
  },
  region: 'us-west-1'
})
  export default client;