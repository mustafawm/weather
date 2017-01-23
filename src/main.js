import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = storeWithMiddleware(reducers)

import './styles/styles.css'
import App from './components/App'

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
)
