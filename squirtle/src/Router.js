import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import br from 'react-intl/locale-data/br'
import messages from 'messages'

import store from './store'
import App from 'components/App'
import HomePage from 'components/HomePage'
import SingleProductPage from 'components/SingleProductPage'
import LoginPage from 'components/LoginPage'
import CartReviewPage from 'components/CartReviewPage'
import SearchPage from 'components/SearchPage'

render(
  <Provider store={store}>
    <IntlProvider locale='en' messages={messages}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={HomePage} />
          <Route path='product/:productId' component={SingleProductPage} />
          <Route path='login' component={LoginPage} />
          <Route path='cart-review' component={CartReviewPage} />
          <Route path='search' component={SearchPage} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);

