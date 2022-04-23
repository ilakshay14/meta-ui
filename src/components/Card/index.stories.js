import React from "react";

import Card from "./index";

export default {
    component: Card,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
