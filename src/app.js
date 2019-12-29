import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import './css/bootstrap.css';
import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';
import './styles.scss';

import Header from './components/header';
import Footer from './components/footer';
import Home from './containers/home';
import About from './containers/about';
import Service from './containers/service';
import Contact from './containers/contact';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default hot(App);
