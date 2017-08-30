import React from 'react'
import { Link } from 'react-router-dom'
import { GithubLogo } from './Icons'

import Code from './Code'

const Install = () => (
    <div className="row row--wide">
        <div className="content-text">
            <div>
                <section className="section">
                    <h2>Install and Setup</h2>
                    <p>
                        First things first, we need to set you up.
                        The <a href="https://github.com/bigchaindb/js-driver-orm" target="_blank">BigchainDB-ORM</a> module
                        we're going to is supported for node (version >= 6) as well as the browser.
                        You can simply install the ORM using:
                    </p>
                    <div style={{ marginBottom: '1em' }}>
                        <code className="code--highlight">npm install bigchaindb-orm</code>
                    </div>
                    <p>
                        Next we need to import the ORM module and connect to a BigchainDB node.
                        In the example given below, we connect to
                        the <a href="https://test.ipdb.io/" target="_blank">IPDB testnet</a>.
                    </p>
                    <p>
                        Finally we need to define our model with a <code>schema</code> that
                        will be used for each instance of the model. In BigchainDB terms this means
                        that each instance of that model is an asset.
                        The schema URI is set in the <code>asset</code> field
                        of the <code>CREATE</code> transaction.
                        For this tutorial, our model happens to be a <code>crabModel</code>.
                    </p>
                    <p>
                        Also, we create a <code>keypair</code> for our user Alice.
                        Below is a snippet of how we set things up in this tutorial.
                    </p>
                </section>
            </div>
            <Code step="home"/>
            <br/>
            <Link className="button button--primary" to="/create">
                First step: Create an asset
            </Link>
        </div>
    </div>
)

export default Install
