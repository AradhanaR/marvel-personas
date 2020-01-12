import React from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContext, Box, Anchor, Text, Button } from 'grommet';
import { RadialSelected } from 'grommet-icons';

const currentPath = window.location.pathname;

function Header() {
  return (
    <Box align="center" pad={{ horizontal: 'xlarge', vertical: 'large' }}>
      <Box width="xlarge">
        <ResponsiveContext.Consumer>
          {size => (
            <Box
              direction="row"
              justify="between"
              align="center"
              width="xlarge"
              alignSelf="center">
              <Anchor href="/" primary label="Home" />
              <Anchor href="/about" primary label="About" />
              <Anchor href="/service" primary label="Service" />
              <Anchor href="/contact" primary label="Contact" />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Box>
    </Box>
  );
}

export default Header;
