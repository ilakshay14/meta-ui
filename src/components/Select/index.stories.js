import React from "react";

import SelectBox from ".";

const commonArgs = {
    options: [
        {
            id: 1,
            name: "test 1",
            value: "test 1",
        },
        {
            id: 2,
            name: "test 2",
            value: "test 2",
        },
    ],
    name: "",
    width: "200px",
    height: "30px",
    border: "2px solid #b5b5b5",
    borderRadius: "3px",
    padding: "5px",
    disabled: false,
    onChange: () => { },
};

export default {
    component: SelectBox,
};

const Template = (args) => (
    <SelectBox {...args}>
        {args.options.length ? (
            args.options.map((item) => (
                <option value={item.value} key={item.id}>
                    {item.name}
                </option>
            ))
        ) : (
            <option value=''>No Options provided</option>
        )}
    </SelectBox>
);

export const Default = Template.bind({});
Default.args = {
    ...commonArgs,
    name: "test-select",
};

export const Error = Template.bind({});

Error.args = {
    ...commonArgs,
    isError: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...commonArgs,
    disabled: true,
};
