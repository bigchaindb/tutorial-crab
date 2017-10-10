import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Home from './Home'
import Create from './Create'
import Retrieve from './Retrieve'
import Append from './Append'
import Burn from './Burn'

import Steps from './Steps'
import Footer from './Footer'

const App = () => (
    <div>
        <Router onUpdate={() => window.scrollTo(0, 0)} basename={'/crab'}>
            <div>

                <Steps/>
                <ScrollToTop>
                    <div className="app__content">

                        <Route exact path="/" component={Home}/>
                        <Route path="/create" component={Create}/>
                        <Route path="/retrieve" component={Retrieve}/>
                        <Route path="/append" component={Append}/>
                        <Route path="/burn" component={Burn}/>

                        <Redirect from='*' to='/' />

                    </div>
                </ScrollToTop>

            </div>
        </Router>
        <Footer/>
    </div>
)

export default App
