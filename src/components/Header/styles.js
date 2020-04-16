import styled from "styled-components";

export const Head = styled.header`
    background-color: #555;
    padding: 10px 2%;
    @media screen and (max-width: 510px){
        text-align: center;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
    float: ${props => props.orientation};
    width: 100px;
    height: 70px;
    background-color: ${props => props.bg};
    border-radius: 10px;
    @media screen and (max-width: 510px){
        float: none;
        display: inline-block;
        margin-top: 10px;
    }
`;
