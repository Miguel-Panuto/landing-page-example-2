import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${props => {
      if(props.margin) {
          return "10px"
      }
      return "40px";
  }};
  input {
    border: 0;
    border-radius: 5px;
    width: 100%;
    background-color: #999;
    color: #fff;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`;
