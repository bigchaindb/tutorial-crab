import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Home from './Home'
import Install from './Install'
import Create from './Create'
import Retrieve from './Retrieve'
import Append from './Append'
import Burn from './Burn'

import Steps from './Steps'

const App = () => (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>

            <Steps/>
            <ScrollToTop>
                <div className="app__content">

                    <Route exact path="/" component={Home}/>
                    <Route path="/install" component={Install}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/retrieve" component={Retrieve}/>
                    <Route path="/append" component={Append}/>
                    <Route path="/burn" component={Burn}/>

                    <Redirect from='*' to='/' />

                </div>
            </ScrollToTop>

        </div>
    </Router>
)

export default App
