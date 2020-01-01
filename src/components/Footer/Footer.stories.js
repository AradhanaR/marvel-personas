import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer';

storiesOf('components/Footer', module).add('default', () => {
  return (
    <Router>
      <Footer />
    </Router>
  );
});
