import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #444;
    }
`;

export const Clear = styled.div`
  clear: both;
`;
