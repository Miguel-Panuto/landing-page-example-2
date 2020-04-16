import styled from 'styled-components';

export const Content = styled.section`
  
`;

export const Mosaic = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const Item = styled.div`
    min-height: 300px;
    background-color: ${props => props.bg};
    width: ${props => props.width};
    padding: ${props => props.padding};
    order: ${props => props.order};
    color: #fff;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;