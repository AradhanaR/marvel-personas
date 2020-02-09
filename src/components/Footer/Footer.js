import React from 'react';
import { Footer as GrommetFooter, Text, Anchor } from 'grommet';

function Footer() {
  return (
    <GrommetFooter background="black" justify="center" pad="small">
      <Text textAlign="center" size="xxsmall">
        <Anchor href="http://marvel.com" color="white">
          Data provided by Marvel. © 2014 Marvel
        </Anchor>
      </Text>
    </GrommetFooter>
  );
}
export default Footer;
