import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import Create from './Create'
import Read from './Read'
import Append from './Append'
import Burn from './Burn'

import Steps from './Steps'

const App = () => (
    <Router>
      <div>

        <Steps/>

        <div className="app__content">

            <Route exact path="/" component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/read" component={Read}/>
            <Route path="/append" component={Append}/>
            <Route path="/burn" component={Burn}/>

        </div>

      </div>
    </Router>
)

export default App
