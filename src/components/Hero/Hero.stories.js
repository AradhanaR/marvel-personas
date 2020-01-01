import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Hero from './Hero';

storiesOf('components/Hero', module).add('default', () => {
  return (
    <Router>
      <Hero />
    </Router>
  );
});
