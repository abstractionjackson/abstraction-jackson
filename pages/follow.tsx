import { NextPage } from "next";
import { Layout } from "../components/Layout"

export const Follow: NextPage = () => (
    <Layout headerText="Follow" navBarLinks={[{text:'Home', href:'/'}]} ></Layout>
)

export default Follow;