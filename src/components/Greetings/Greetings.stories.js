import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Greetings from './Greetings';

storiesOf('components/Greetings', module).add('default', () => {
  return (
    <Router>
      <Greetings />
    </Router>
  );
});
