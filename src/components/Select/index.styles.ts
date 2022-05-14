import styled from "styled-components";

interface StyleProps {
    name: string;
    id?: string;
    width: string;
    height: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    disabled?: boolean;
    isError?: boolean;
    color?: string;
}

const StyledSelect = styled.select<StyleProps>`
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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

export default StyledSelect;
