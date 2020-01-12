import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grommet } from 'grommet';

import { powerTheme } from '../../themes';

import BlockQuote from './BlockQuote';

storiesOf('component-lib/BlockQuote', module)
  .add('default', () => {
    return (
      <Grommet full theme={powerTheme}>
        <BlockQuote
          text="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
          footer="—Aldous Huxley"></BlockQuote>
      </Grommet>
    );
  })
  .add('xsmall', () => {
    return (
      <Grommet full theme={powerTheme}>
        <BlockQuote
          text="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
          footer="—Aldous Huxley"
          size="xsmall"></BlockQuote>
      </Grommet>
    );
  })
  .add('small', () => {
    return (
      <Grommet full theme={powerTheme}>
        <BlockQuote
          text="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
          footer="—Aldous Huxley"
          size="small"></BlockQuote>
      </Grommet>
    );
  })
  .add('medium', () => {
    return (
      <Grommet full theme={powerTheme}>
        <BlockQuote
          text="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
          footer="—Aldous Huxley"
          size="medium"></BlockQuote>
      </Grommet>
    );
  })
  .add('large', () => {
    return (
      <Grommet full theme={powerTheme}>
        <BlockQuote
          text="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
          footer="—Aldous Huxley"
          size="large"></BlockQuote>
      </Grommet>
    );
  })
  .add('xlarge', () => {
    return (
      <Grommet full theme={powerTheme}>
        <BlockQuote
          text="Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced."
          footer="—Aldous Huxley"
          size="xlarge"></BlockQuote>
      </Grommet>
    );
  });
