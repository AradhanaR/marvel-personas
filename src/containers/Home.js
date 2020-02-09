import React, { Component } from 'react';
import { Main, Box } from 'grommet';
import Greetings from '../components/Greetings';
import Hero from '../components/Hero';
import bgImg from '../assets/images/bg.jpg';

class Home extends Component {
  render() {
    return (
      <Main
        direction="row"
        justify="center"
        overflow="none"
        background={{ image: `url(${bgImg})` }}>
        <Box width="xlarge">
          <Greetings />
          <Hero />
        </Box>
      </Main>
    );
  }
}

export default Home;
