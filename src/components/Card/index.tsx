import React, { HTMLAttributes } from "react";
import StyledCard from "./index.styles";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    width: string;
    height: string;
    color: string;
    bgColor: string;
    border: string;
    borderRadius: string;
    padding: string;
    shadow: string;
    isClickable?: boolean;
    onClick?: () => void;
}

const Card = (props: CardProps) => {
    return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;

Card.defaultProps = {
    width: "200px",
    height: "83px",
    color: "#323153",
    bgColor: "#D1D0FB",
    border: "none",
    borderRadius: "10px",
    padding: "15px",
    disabled: false,
    isClickable: false,
    shadow: "0px 1px 0.88px rgba(45, 114, 159, 0.2)",
};
