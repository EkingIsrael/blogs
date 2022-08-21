import React from "react";
import { PostComponent } from "./PostComponent";

export default {
    title: "Components/PostComponent",
    component: PostComponent,
}

const Template = (args) => <PostComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: "/postimage.webp",
    title: "Demo Post",
}