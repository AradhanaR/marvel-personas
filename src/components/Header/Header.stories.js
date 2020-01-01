import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

storiesOf('components/Header', module).add('default', () => {
  return (
    <Router>
      <Header />
    </Router>
  );
});
