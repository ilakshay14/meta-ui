import styled from "styled-components";

interface StyleProps {
    width: string;
    height: string;
    type: string;
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

const StyledInput = styled.input<StyleProps>`
    cursor: ${(props) => (props.disabled ? "not-allowed" : "initial")};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
    border: ${(props) => props.border};
    border-color: ${(props) => (props.isError ? "#d32f2f" : "")};

    border-radius: ${(props) => props.borderRadius};

    &:focus {
        border-color: rgba(0, 0, 0, 0.5);
        outline: none;
    }
`;

export default StyledInput;
