import styled from "styled-components";

interface StyleProps {
    width: string;
    height: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    isClickable?: boolean;
    objectPosition?: string;
}

const StyledAvatar = styled.div<StyleProps>`
    cursor: ${(props) => (props.isClickable ? "pointer" : "initial")};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
    background-color: #fff;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
        object-fit: cover;
        object-position: ${(props) =>
            props.objectPosition ? props.objectPosition : "initial"};
    }
`;

export default StyledAvatar;
