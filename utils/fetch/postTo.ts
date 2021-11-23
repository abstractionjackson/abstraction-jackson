import { createBrotliCompress } from "zlib";

interface IPostTo {
    endpoint: string;
    data:object;
    baseUrl?: string;
}
export default async function postTo({
    endpoint,
    data,
    baseUrl='/api/v1'
}:IPostTo) {
    let response;
    try {
        response = await fetch(baseUrl+endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
        console.log(response)
    } catch (error) {
        console.error(error)
    } finally {
        return response;
    }
}