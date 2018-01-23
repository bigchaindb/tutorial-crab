import React from 'react'
import { Link } from 'react-router-dom'
import { GithubLogo } from './Icons'

import Code from './Code'

const Home = () => (
    <div className="row row--wide">
        <div className="content-text">
            <div>
                <h1>The CRAB tutorial</h1>
                <b>C</b>reate, <b>R</b>etrieve, <b>A</b>ppend and <b>B</b>urn:
                Basic operations for a blockchain database.
                <section className="section">
                    <h2>Introduction</h2>
                    <p>
                        This tutorial illustrates how BigchainDB is used
                        as a database that is accessible from the browser.
                        The basic operations covered are much like
                        your standard database operations, but with a blockchain tweak:
                    </p>
                    <p>
                        The following table gives a sneak preview of what to expect
                        from this tutorial and the difference between regular databases and
                        blockchain databases, such as BigchainDB:
                    </p>
                    <div className="table-tutorial__wrapper">
                        <table className="table-tutorial">
                            <thead>
                                <tr>
                                    <td>Database: CRUD</td>
                                    <td>BigchainDB: CRAB</td>
                                </tr>
                            </thead>
                            <tr>
                                <td>
                                    <b><u>C</u></b>REATE
                                </td>
                                <td>
                                    <b><u>C</u></b>REATE
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b><u>R</u></b>EAD
                                </td>
                                <td>
                                    <b><u>R</u></b>ETRIEVE
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i><b><u>U</u></b>PDATE*</i>
                                </td>
                                <td>
                                    <i><b><u>A</u></b>PPEND*</i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i><b><u>D</u></b>ELETE*</i>
                                </td>
                                <td>
                                    <i><b><u>B</u></b>URN*</i>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <p>
                        The differences are marked with an asterix (*).
                        Since Blockchains are immutable and append-only, operations such as
                        UPDATE and DELETE are not directly supported.
                        Instead, they are represented by state changes: APPEND and BURN.
                        Think of it as a fully versioned database,
                        where all actions on records are immutably recorded.
                    </p>
                    <p>
                        Oh crab, that sounds a bit weird?!
                        No worries, we got you covered...
                        In the following, we'll explore the CRAB approach to blockchain
                        databases with an hands-on interactive example.
                    </p>
                    <p>
                        All code can be found by clicking the github button <span className="logo-xs"> <GithubLogo/></span> on the navigation bar.
                    </p>
                </section>
            </div>
        </div>
        <div className="content-text">
            <div>
                <section className="section">
                    <h2>Install and Setup</h2>
                    <p>
                        First things first, we need to set you up.
                        The <a href="https://github.com/bigchaindb/js-driver-orm" target="_blank">BigchainDB-ORM</a> module
                        we're going to install is supported for NodeJS (version >= 6) as well as the browser.
                        You can simply install the ORM using:
                    </p>
                    <div style={{ marginBottom: '1em' }}>
                        <code className="code--highlight">npm install bigchaindb-orm</code>
                    </div>
                    <p>
                        Next, we need to import the ORM module and connect to a BigchainDB node.
                        In the example given below, we connect to
                        the <a href="https://test.bigchaindb.com/" target="_blank">BigchainDB Test</a> network where we already created account and received credentials.
                    </p>
                    <p>
                        Finally, we need to define our model with a <code>schema</code> that
                        will be used for each instance of the model. In BigchainDB terms, this means
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

export default Home
