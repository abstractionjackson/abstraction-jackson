import { NextPage } from "next";
import { FormEvent, useState } from "react";

export const CreatePost: NextPage = () => {
    //handle change(s) and submit
    const [title, setTitle] = useState('');
    const handleChange = (e:any) => {
        const { target } = e;
        
        setTitle(target.value);
    }
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        const endpoint = '/api/v1/post'
        const method = 'POST'

        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title })
            })
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="container">
            <form id="post-create" onSubmit={handleSubmit}>
                <label htmlFor="create-title">
                    Title
                    <input id="create-title" type="text" onChange={handleChange} value={title}/>
                </label>
                {/* <label htmlFor="create-tag">
                    Tags
                    <input id="create-tag" type="text" />
                </label>
                <label htmlFor="create-body">
                    Body
                    <input id="create-body" type="textarea" />
                </label> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default CreatePost;