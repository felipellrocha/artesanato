import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'
import App from 'components/App'
import HomePage from 'components/HomePage'
import SingleArtworkPage from 'components/SingleArtworkPage'

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='artwork/:artworkId' component={SingleArtworkPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

