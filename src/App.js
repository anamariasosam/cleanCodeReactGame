import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Game from './views/Game'
import Home from './views/Home'

const App = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
      </div>
    </Router>
)

export default App
