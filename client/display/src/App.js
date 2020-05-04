import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import DepartureTimes from './components/DepartureTimes'
import Realtime from './components/Realtime'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={DepartureTimes} />
      </Router>
      <Router>
        <Route exact path="/test" component={Realtime} />
      </Router>
    </Provider>
  )
}

export default App;
