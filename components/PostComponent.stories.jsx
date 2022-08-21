import React from "react";
import { PostComponent } from "../components/PostComponent";

export default {
    title: "Components/PostComponent",
    component: PostComponent,
}

const Template = (args) => <PostComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}