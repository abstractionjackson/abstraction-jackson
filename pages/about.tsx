import { NextPage } from "next";
import { Layout } from "../components/Layout"

export const About: NextPage = () => (
    <Layout headerText="About" navBarLinks={[{text:'Home', href:'/'}]} ></Layout>
)

export default About;