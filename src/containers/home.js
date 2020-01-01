import React, { Component } from 'react';
import Greeting from '../components/Greetings';
import Hero from '../components/Hero';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Greeting />
        <div className="row text-center">
          <Hero />
        </div>
      </div>
    );
  }
}
export default Home;
