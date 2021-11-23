//async function that takes the slug of a page,
//and returns the json

import { GetObjectCommand } from "@aws-sdk/client-s3";
import client from "../../config/s3.config";
import { streamToString } from "../streamToString";

export const getPage = async(slug:string) => {
    //get the client
    let response;
    const params = {
        Bucket: 'abstraction-jackson',
        Key: `page/${slug}.json`
    }
    const command = new GetObjectCommand(params);
    try {
        response = await client.send(command);
        return streamToString(response.Body);
    } catch (error) {
        console.error(error);
    } 
}