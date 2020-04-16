import styled from "styled-components";
import { Container } from "../../global-styles";

export const Cover = styled.section`
  width: 100%;
  padding: 0 2%;
`;

export const FormContainer = styled(Container)`
  background-color: #999;
  height: 700px;
`;

export const FormContent = styled.div`
    float: right;
    position: relative;
    top: -20px;
    width: 400px;
    height: calc(100% + 30px);
    background-color: #CCC;
    box-shadow: 5px 5px 5px #1119;
    margin-right: 40px;
    h2 {
        background-color: #222;
        padding: 30px 15px;
        color: #fff;
        font-weight: normal;
        font-size: 1.2rem;
    }
    form {
        margin-top: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    input[type=submit] {
      cursor: pointer;
      background-color: #33055f;
      text-transform: uppercase;
      color: #fff;
      width: 100%;
      height: 50px;
      font-size: 25px;
      border: 0;
    }

    div {
      margin-top: 40px;
    }

    div p {
      color: #555;
    }
`;
