import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { streamToString } from '../../../utils/streamToString';


export class NavLinkData {
    public href:string;
    public text:string;
    constructor(href='/',text=''){
        this.href = href;
        this.text = text;
    }
}

const tagline:string = 'When the rabbit hole grows deep...'

const siteTitle:string = "Abstraction Jackson"

const links = [
    new NavLinkData('/', 'Home'),
    new NavLinkData('/follow', 'Follow'),
    new NavLinkData('/about', 'About'),
    new NavLinkData('/portfolio', "Portfolio")
]
export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    const s3Client = new S3Client({
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
        }
    })
    const params = {
        Bucket: process.env.AWS_S3_BUCKET || 'abstraction-jackson',
        Key: 'foo.json'
    };
    const command = new GetObjectCommand(params);
    // return a list of nav link data
    try {
        const response = await s3Client.send(command);
        const data = await streamToString(response.Body);
        console.log(data);
        res.json({
            links,
            tagline,
            siteTitle,
            data
        });
    } catch (error) {
        console.error("ERR", error)
        res.status(400)
    } finally {
        res.end()
    }
}