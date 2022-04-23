import React from "react";

import Avatar from "./index";

export default {
    component: Avatar,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
export const ClickableAvatar = Template.bind({});

ClickableAvatar.args = {
    isClickable: true,
};

export const SmallAvatar = Template.bind({});

SmallAvatar.args = {
    width: "60px",
    height: "60px",
};

export const TinyAvatar = Template.bind({});

TinyAvatar.args = {
    width: "30px",
    height: "30px",
};
