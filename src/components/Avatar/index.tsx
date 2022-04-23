import React, { HTMLAttributes } from "react";
import StyledAvatar from "./index.styles";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    width: string;
    height: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    isClickable?: boolean;
    src: string;
    alt: string;
}

const Avatar = (props: AvatarProps) => {
    return (
        <StyledAvatar {...props}>
            <img src={props.src} alt={props.alt} />
        </StyledAvatar>
    );
};

export default Avatar;

Avatar.defaultProps = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "none",
    padding: "0",
    isClickable: false,
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "user-profile-image",
};
