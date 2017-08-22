import React from 'react'
import {Link} from 'react-router-dom'

import Code from './Code'

const Home = () => (
    <div className="row row--wide">
        <div className="content-text">
            <div>
                <h1>The C.R.A.B. tutorial</h1>
                Basic operations on blockchain database with decentralized identifiers.
            </div>
            <br/>
            <div>To install: npm install bdborm</div>
            <br/>
            bdborm.js file (needed and included in every step)
            <Code step="home"/>
            <br/>
            <Link className="button button--primary" to="/create">
                Start tutorial
            </Link>
        </div>
    </div>
)

export default Home
