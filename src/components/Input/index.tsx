import React, { HTMLAttributes } from "react";
import StyledInput from "./index.styles";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    width: string;
    height: string;
    type: string;
    onChange: () => void;
    value: string;
    placeholder?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    disabled?: boolean;
    isError?: boolean;
    color?: string;
    style?: object;
}

const InputBox = (props: InputProps) => {
    return <StyledInput {...props} />;
};

export default InputBox;

InputBox.defaultProps = {
    width: "150px",
    height: "30px",
    border: "2px solid #b5b5b5",
    borderRadius: "3px",
    padding: "5px",
    disabled: false,
    type: "text",
    onChange: () => {},
    placeholder: "text input",
};
