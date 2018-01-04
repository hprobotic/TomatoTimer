import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from 'redux-persist/es/storage'
import * as reducers from './reducers'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

const config = {
  key: 'root',
  storage
}

const reducer = persistCombineReducers(config, {
  ...reducers
})

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
let persistor = persistStore(store)

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Provider store={store}>
        <App />
      </Provider>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
)
registerServiceWorker()
