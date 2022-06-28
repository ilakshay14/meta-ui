import React from "react";
import ErrorBox from "./index";

export default {
    component: ErrorBox,
    args: {
        width: '600px',
        height: '300px'
    }
};

const Template = (args) => <ErrorBox {...args} />;

export const Primary = Template.bind({});
export const WithActions = Template.bind({});

WithActions.args = {
    hasActions: true,
    actions: [
        {
            isButton: true,
            text: 'Test Button 1',
            name: 'testButton 1',
            styles: {
                background: '#DE0A01',
                color: '#fff',
                height: '35px',
                borderRadius: '4px',
                padding: '0px 15px',
                fontSize: '0.938rem',
                fontWeight: 'bold',
            },
            disabled: false,
            onClick: () => alert('this is test button 1')
        },
        {
            isButton: true,
            text: 'Test Button 2',
            name: 'testButton 2',
            styles: {
                background: 'transparent',
                border: '2px solid #eeedef',
                color: '#6f6e77',
                height: '35px',
                borderRadius: '4px',
                padding: '0px 15px',
                fontSize: '0.938rem',
                fontWeight: 'bold',
            },
            disabled: true,
            onClick: () => alert('this is a test button 2')
        }
    ]

};
