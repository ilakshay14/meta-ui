import React, { HTMLAttributes } from "react";
import StyledButton from "./index.styles";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
    width: string;
    height: string;
    color: string;
    bgColor: string;
    border: string;
    borderRadius: string;
    padding: string;
    disabled: boolean;
    onClick: () => void;
}

const Button = (props: ButtonProps) => {
    return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;

Button.defaultProps = {
    width: "150px",
    height: "40px",
    color: "#fff",
    bgColor: "#9747ff",
    label: "Click Me",
    border: "none",
    borderRadius: "5px",
    padding: "0",
    disabled: false,
};
