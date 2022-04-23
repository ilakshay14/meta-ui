import styled from "styled-components";

interface StyleProps {
    width: string;
    height: string;
    bgColor: string;
    border: string;
    borderRadius: string;
    color: string;
    padding: string;
    shadow: string;
}

const StyledCard = styled.div<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    box-shadow: ${(props) => props.shadow};
`;

export default StyledCard;
