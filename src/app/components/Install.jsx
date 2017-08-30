import React from 'react'
import { Link } from 'react-router-dom'
import { GithubLogo } from './Icons'

import Code from './Code'

const Install = () => (
    <div className="row row--wide">
        <div className="content-text">
            <div>
                <h1>Install and Setup</h1>
            </div>
            <br />
            <code className="code--install">npm install bigchaindb-orm</code>
            <Code step="home"/>
            <br/>
            <Link className="button button--primary" to="/create">
                Create an asset
            </Link>
        </div>
    </div>
)

export default Install
