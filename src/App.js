import React from 'react';

import GlobalStyles from './global-styles';
import Header from './components/Header';
import Form from './components/Form';
import Call from './components/Call';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Form />
      <Call />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
