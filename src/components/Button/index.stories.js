import React from "react";

import Button from "./index";

export default {
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const DisabledButton = Template.bind({});

DisabledButton.args = {
    disabled: true,
};
