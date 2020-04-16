import React from 'react';
import { FiChevronDown } from 'react-icons/fi'

import { Cover, FormContainer, FormContent, ArrowDownContainer } from './styles';
import FormWrapper from './FormWrapper';

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
      <ArrowDownContainer>
        <FiChevronDown size={50} color="#fff"/>
      </ArrowDownContainer>
    </FormContainer>
  </Cover>
);

export default Form;
