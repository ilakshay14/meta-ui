import styled from "styled-components";

interface StyleProps {
  width?: string;
  height?: string;
  border?: string;
}

const Container = styled.div<StyleProps>`
    width: ${(props) => props.width ? props.width : '90vw'};
    height: ${(props) => props.height ? props.height : '85vh'};
    border: ${(props) => props.border ? props.border : '1px solid #ffccc7'};
    border-radius: 6px;
    max-width: 500px;
    max-height: 300px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .errorBox_img_container {
      width: 60px;
      height: 60px;

      img{
        width: 100%;
        height: 100%;
        filter: invert(44%) sepia(25%) saturate(1337%) hue-rotate(308deg) brightness(86%) contrast(112%);
      }
  
    }

    p {
      max-width: 70%;
      text-align: center;
      color: #1a1523;
      font-size: 1.22rem;
      font-weight: 600;
    }

    .errorBox_action_container{
      margin-top: 20px;
      width: 75%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

    }
`;

export default Container;
