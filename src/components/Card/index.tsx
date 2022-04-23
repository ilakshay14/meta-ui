import React, { HTMLAttributes } from "react";
import StyledCard from "./index.styles";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    width: string;
    height: string;
    color: string;
    bgColor: string;
    border: string;
    borderRadius: string;
    padding: string;
    shadow: string;
}

const Card = (props: ButtonProps) => {
    return <StyledCard {...props}>{props.label}</StyledCard>;
};

export default Card;

Card.defaultProps = {
    width: "200px",
    height: "83px",
    color: "#323153",
    bgColor: "#D1D0FB",
    label: "Click Me",
    border: "none",
    borderRadius: "10px",
    padding: "15px",
    disabled: false,
    shadow: "0px 1px 0.88px rgba(45, 114, 159, 0.2)",
};
