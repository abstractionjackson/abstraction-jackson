import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../utils/Post";

export default async function _(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        const { title } = req.body;
        const newPost = new Post(title);
        try {
            const res = await newPost.put()
            console.log(res);
        } catch (error) {
            throw error;
        }
    }
    res.end();
}