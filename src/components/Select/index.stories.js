// import React from "react";
import SelectBox from ".";
import { commonArgs } from './index.util';


export default {
    component: SelectBox,
};

const Template = (args) =>
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
