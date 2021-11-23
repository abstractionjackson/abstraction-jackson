import { PutObjectCommand } from "@aws-sdk/client-s3";

import client from "../config/s3.config";
import { makeSlug } from "./makeSlug";

export class NavLinkData {
    public href:string;
    public text:string;
    constructor(href='/',text=''){
        this.href = href;
        this.text = text;
    }
}

class Page {
    constructor(
        public header: string,
        public description: string,
        public slug?: string,
        public navBarLinks?: NavLinkData[]
    ){
        this.slug = slug || makeSlug(header);
    }
    async put() {
        const params = {
            Bucket: "abstraction-jackson",
            Key: `page/${this.slug}.json`,
            Body: JSON.stringify(this)
        };

        const command = new PutObjectCommand(params);

        try {
            const res = await client.send(command);
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }

};

export default Page;