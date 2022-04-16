import styled from "styled-components";

interface StyleProps {
    width: string;
}

const StyledButton = styled.button<StyleProps>`
    width: ${(props: any) => (props.width ? props.width : "100px")};
    background-color: blue;
`;

export default StyledButton;
