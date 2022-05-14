import styled from "styled-components";

interface StyleProps {
    width: string;
    height: string;
    bgColor: string;
    border: string;
    borderRadius: string;
    color: string;
    padding: string;
    disabled: boolean;
}

const StyledButton = styled.button<StyleProps>`
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
    background-color: ${(props) =>
        props.disabled ? "#c4c4c4" : props.bgColor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
`;

export default StyledButton;
