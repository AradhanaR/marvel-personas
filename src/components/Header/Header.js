import React from 'react';
import { omit } from 'lodash';
import {
  ResponsiveContext,
  Box,
  Menu,
  Header as GrommetHeader,
  Anchor,
  Nav,
  ThemeContext
} from 'grommet';
import { Home, Group, BusinessService, ContactInfo } from 'grommet-icons';

const menuItems = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'About', href: '/about', icon: <Group /> },
  { label: 'Service', href: '/service', icon: <BusinessService /> },
  { label: 'Contact', href: '/contact', icon: <ContactInfo /> }
];

function Header() {
  return (
    <ThemeContext.Extend
      value={{
        global: {
          colors: { 'accent-1': '#DDDDDD', focus: 'white' }
        },
        anchor: {
          hover: { extend: { color: 'white', textDecoration: 'none' } }
        }
      }}>
      <GrommetHeader background="black" justify="center">
        <Box
          width="xlarge"
          pad="small"
          responsive={true}
          direction="row"
          justify="between">
          <Box direction="row" gap="small">
            <Anchor href="/" size="large" color="white">
              Marvels
            </Anchor>
          </Box>
          <ResponsiveContext.Consumer align="right">
            {size =>
              size === 'small' ? (
                <Menu items={menuItems} />
              ) : (
                <Nav direction="row">
                  {menuItems.map(item => (
                    <Anchor {...omit(item, ['icon'])} key={item.label} />
                  ))}
                </Nav>
              )
            }
          </ResponsiveContext.Consumer>
        </Box>
      </GrommetHeader>
    </ThemeContext.Extend>
  );
}

export default Header;
