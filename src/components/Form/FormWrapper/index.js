import React from "react";

import { Container } from "./styles";

const FormWrapper = (props) => (
  <Container margin={props.margin}>
    <span>{props.title}</span>
    <input
      type={props.inputType}
      name={props.inputName}
      required={props.required}
      placeholder={props.placeholder}
    />
  </Container>
);

export default FormWrapper;
