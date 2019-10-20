
import React from "react";
import { hot } from 'react-hot-loader/root';
import bootstrap from './css/bootstrap.css';
import gridcss from './css/bootstrap-grid.css';
import rebootcss from './css/bootstrap-reboot.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <div> Welcome to Marvels ddd{name}</div>;
  }
}

export default hot(App);
