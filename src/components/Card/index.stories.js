import React from "react";

import Card from "./index";

export default {
    component: Card,
};

const Template = (args) => (
    <Card {...args}>
        <p>
            {args.isClickable
                ? "This is a clickable card."
                : "This is a dumb card"}
        </p>
    </Card>
);

export const Default = Template.bind({});

export const Clickable = Template.bind({});

Clickable.args = {
    isClickable: true,
};
