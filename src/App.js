import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './containers/store'
import ClickCounter from './components/ClickCounter'

function App() {
  return (
    <Provider store={store}>
      <ClickCounter />
    </Provider>
  )
}

export default App
