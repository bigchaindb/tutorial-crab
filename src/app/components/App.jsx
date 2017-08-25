import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Home from './Home'
import Create from './Create'
import Retrieve from './Retrieve'
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
            <Route path="/retrieve" component={Retrieve}/>
            <Route path="/append" component={Append}/>
            <Route path="/burn" component={Burn}/>

            <Redirect from='*' to='/' />

        </div>

      </div>
    </Router>
)

export default App
