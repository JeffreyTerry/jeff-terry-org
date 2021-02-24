import React from 'react';
import Home from '../components/Home';
import { Helmet } from 'react-helmet';
import './index.css';

function IndexPage() {
  return (
    <main>
      <Helmet>
        <title>Jeff Terry</title>
      </Helmet>
      <Home />
    </main>
  );
}

export default IndexPage;
