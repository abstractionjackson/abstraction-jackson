import { NextApiRequest, NextApiResponse } from "next";
import Page from "../../../utils/Page";

export default async function _(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        const { header, description, slug} = req.body;
        const newPage = new Page(
            header,
            description,
            slug
        );
        try {
            const res = await newPage.put()
            console.log(res);
        } catch (error) {
            throw error;
        }
    }
    res.end();
}