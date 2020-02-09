import React from 'react';
import { Heading } from 'grommet';
import { Box, Button } from 'grommet';
import { UserExpert } from 'grommet-icons';
import BlockQuote from '../../component-lib/BlockQuote';

function Greetings() {
  return (
    <Box
      background="#9E140F"
      pad="large"
      flex={false}
      round="xsmall"
      style={{ display: 'block', marginTop: '25px' }}>
      <Heading level={1} margin="none" style={{ fontWeight: 100 }}>
        Greetings from Marvel Universe!
      </Heading>

      <BlockQuote
        text="Compromise where you can, but where you can’t, don’t. Even if
      everyone is telling you that something wrong is something right.
      Even if the whole world is telling you to move. It is your duty to
      plant yourself like a tree, to look them in the eye and say, no, you
      move."
        footer=" – Sharon Carter (Captain America: Civil War, 2016)"
        background="#9E140F"
        style={{ fontStyle: 'italic' }}></BlockQuote>
      <Button
        icon={<UserExpert />}
        label="Find a Match!"
        primary
        onClick={() => {}}
      />
    </Box>
  );
}
export default Greetings;
