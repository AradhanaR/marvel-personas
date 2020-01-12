import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Grommet, grommet } from 'grommet';
import * as serviceWorker from './serviceWorker';

import App from './App';
import reducer from './reducers';
import { powerTheme } from './themes';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Grommet full theme={powerTheme}>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
