import React, { Component } from "react";
import Greeting from '../components/greetings';
import Hero from '../components/hero';


class Service extends Component {
  render() {
    return (
      <div className="container">
        <Greeting />
      </div>
    );
  }
}
export default Service;
