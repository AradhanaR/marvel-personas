import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grommet } from 'grommet';
import { powerTheme } from '../../themes';
import Hdata from '../../components/Hero/data.json';
import CardList from './Card';

storiesOf('component-lib/Card', module)
  .add('default', () => {
    return (
      <Grommet full theme={powerTheme}>
        <CardList
          characterList={Hdata}
          columns={5}
          markFav={true}
        ></CardList>
      </Grommet>
    );
  });
