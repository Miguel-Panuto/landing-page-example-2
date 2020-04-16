import React from "react";

import { Cover, FormContainer, FormContent } from "./styles";
import FormWrapper from "./FormWrapper";
// import { Container } from "../../global-styles";

const Form = () => (
  <Cover>
    <FormContainer>
      <FormContent>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <form>
          <FormWrapper
            title="Name *"
            inputType="text"
            inputName="name"
            required={true}
            placeholder="Name"
            margin
          />

          <FormWrapper
            title="E-mail *"
            inputType="email"
            inputName="name"
            required={true}
            placeholder="E-mail"
          />

          <FormWrapper
            title="Phone number *"
            inputType="tel"
            inputName="name"
            required={true}
            placeholder="Phone number"
          />
          <div>
            <input type="submit" name="action" value="send"/>
          </div>

          <div>
              <p>* Required fields</p>
          </div>
        </form>
      </FormContent>
    </FormContainer>
  </Cover>
);

export default Form;
