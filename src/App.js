import React from 'react';

import GlobalStyles from './global-styles';
import Header from './components/Header';
import Form from './components/Form';
import Call from './components/Call'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Form />
      <Call />
      <Gallery />
    </>
  );
}

export default App;
