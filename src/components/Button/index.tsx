import React from "react";
import StyledButton from "./index.styles.js";
export interface ButtonProps {
    label: string;
    width: any;
}

const Button = (props: ButtonProps) => {
    return <StyledButton width={props.width}>{props.label}</StyledButton>;
};

export default Button;
