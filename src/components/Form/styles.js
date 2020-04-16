import styled from "styled-components";
import { Container } from "../../global-styles";

export const Cover = styled.section`
  width: 100%;
`;

export const FormContainer = styled(Container)`
  position: relative;
  background-color: #999;
  height: 560px;
  @media screen and (max-width: 960px){
    text-align: center;
  }
`;

export const FormContent = styled.div`
  position: absolute;
  top: -2.5%;
  right: 30px;
  width: 96%;
  max-width: 400px;
  height: 105%;
  background-color: #ccc;
  margin-right: 40px;
  h2 {
    background-color: #222;
    padding: 30px 15px;
    color: #fff;
    font-weight: normal;
    font-size: 1.2rem;
  }
  form {
    position: relative;
    height: 80%;
    margin-top: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input[type="submit"] {
    cursor: pointer;
    background-color: #33055f;
    text-transform: uppercase;
    color: #fff;
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    border: 0;
  }

  div p {
    color: #555;
  }

  @media screen and (max-width: 960px){
    position: static;
    display: inline-block;
    margin: 0 auto;
  }
`;

export const ArrowDownContainer = styled.div`
  position: relative;
  top: 95%;
  left: 50%;
  right: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #70c;
  @media screen and (max-width:1100px){
    display: none;
  }
`;
