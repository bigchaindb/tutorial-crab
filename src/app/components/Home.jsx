import React from 'react'
import { Link } from 'react-router-dom'
import { GithubLogo } from './Icons'

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
                        This tutorial will illustrate how BigchainDB is used
                        as a database that is accessible from the browser.
                        The basic operations that we will cover are much like
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
            <Link className="button button--primary" to="/install">
                Start tutorial
            </Link>
        </div>
    </div>
)

export default Home
