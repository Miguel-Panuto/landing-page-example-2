import React from "react";

import { Content, Mosaic, Item } from "./styles";
import { Container } from "../../global-styles";

const Gallery = () => (
  <Content>
    <Container>
      <Mosaic>
        <Item bg="#34c" width="60%"/>
        <Item width="40%" padding="40px" bg="#bbb">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            porta augue. Suspendisse lacinia arcu vel enim bibendum, id auctor
            dui semper. Praesent molestie semper dui. Fusce cursus et nisi a
            cursus. Nam aliquam dui nec eros porta, a pulvinar lorem posuere.
            Nunc id ante ultrices, malesuada odio quis, lacinia lectus. Duis
            tristique, est in euismod ullamcorper, velit quam bibendum libero,
            varius vestibulum odio massa eu sem.
          </p>
        </Item>
      </Mosaic>
      <Mosaic direction="row-reverse">
        <Item bg="#34c" width="60%"/>
        <Item width="40%" padding="40px" bg="#bbb">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            porta augue. Suspendisse lacinia arcu vel enim bibendum, id auctor
            dui semper. Praesent molestie semper dui. Fusce cursus et nisi a
            cursus. Nam aliquam dui nec eros porta, a pulvinar lorem posuere.
            Nunc id ante ultrices, malesuada odio quis, lacinia lectus. Duis
            tristique, est in euismod ullamcorper, velit quam bibendum libero,
            varius vestibulum odio massa eu sem.
          </p>
        </Item>
      </Mosaic>
    </Container>
  </Content>
);

export default Gallery;
