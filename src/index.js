import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from './reducers'
import App from './App'

import './index.scss'

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
