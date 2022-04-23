import React from "react";

import Button from "./index";

export default {
    component: Button,
    argTypes: {
        label: {
            defaultValue: "Default Button",
        },
        onClick: { action: "clicked" },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const DisabledButton = Template.bind({});

DisabledButton.args = {
    disabled: true,
};
