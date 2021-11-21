import { PutObjectCommand } from "@aws-sdk/client-s3";
import client from "../config/s3.config";

class Post {
    public slug: string
    constructor(
        public title: string
    ){
        this.slug = title.toLowerCase().replaceAll(/\s/g, '-')
    };
    async put() {
        const params = {
            Bucket: "abstraction-jackson",
            Key: `post/${this.slug}.json`,
            Body: JSON.stringify(this)
        };

        const command = new PutObjectCommand(params);

        try {
            const res = await client.send(command);
            return res;
        } catch (error) {
            throw error;
        }
    }
}

export default Post;