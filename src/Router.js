import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'
import App from 'components/App'
import Home from 'components/Home'
import SingleArtworkPage from 'components/SingleArtworkPage'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='artwork/' component={SingleArtworkPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

