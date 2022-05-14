import React from "react";

import InputBox from "./index";

const commonArgs = {
    width: "150px",
    height: "30px",
    border: "2px solid #b5b5b5",
    borderRadius: "3px",
    padding: "5px",
    disabled: false,
};

export default {
    component: InputBox,
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => <InputBox {...args} />;

export const Text = Template.bind({});
Text.args = {
    ...commonArgs,
    type: "text",
    placeholder: "text input",
    onChange: () => {},
};

export const Number = Template.bind({});

Number.args = {
    ...commonArgs,
    type: "number",
    placeholder: "number input",
};

export const Email = Template.bind({});

Email.args = {
    ...commonArgs,
    type: "email",
    placeholder: "email input",
};

export const Password = Template.bind({});

Password.args = {
    ...commonArgs,
    type: "password",
    placeholder: "password input",
};

export const Error = Template.bind({});

Error.args = {
    ...commonArgs,
    type: "text",
    placeholder: "text input",
    isError: true,
};
