import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'
import { Link } from 'react-router-dom'

import Code from './Code'
import Output from './Output'

import getErrorMessage from '../getErrorMessage'
import bdborm from '../initdb'

class Create extends React.Component {
    constructor(props) {
        super(props)
        const keypair = JSON.parse(localStorage.getItem('keypair'))
        this.state = {
            output: null,
            error: null,
            crab: null,
            keypair: keypair || new driver.Ed25519Keypair()
        }
        localStorage.setItem('keypair', JSON.stringify(this.state.keypair))
        this.createCrab = this.createCrab.bind(this)
    }
    createCrab() {
        this.setState({
            output: null,
            error: null,
        })
        bdborm.crab
            .create({
                keypair: this.state.keypair,
                data: {
                    breed: 'coconut crab',
                    color: 'blue'
                }
            })
            .then(crab => {
                this.setState({
                    output: JSON.stringify(crab, null, 2),
                    crab
                })
                localStorage.setItem('crabid', crab.id)
            })
            .catch(err => {
                getErrorMessage(err).then((errMessage) => {
                    this.setState({
                        error: errMessage
                    })
                })
            })
    }
    render() {
        return (
            <div className="row row--wide">
                <div className="content-text">
                    <div>
                        <section className="section">
                            <h2>Create</h2>
                            <p>
                                Say you wanted to create an <code>asset</code> of <code>crabModel</code>,
                                simply invoke the <code>.create()</code> function for your model. You can add
                                some specific <code>data</code> related to the instance you created.
                                This could be useful to track the state or any attribute of your asset.
                                Of course, you will also need to provide the keypair for signing the transaction.
                            </p>
                            <p>
                                Once the create is triggered, a transaction is sent to the network and returns
                                a promise that resolves into an <code>OrmObject</code> once the transaction is approved.
                                This object contains some useful attributes and functions that we'll explore in the
                                next steps.
                            </p>
                        </section>
                    </div>
                    <div className="exampleHolder">
                        <div className="sideHolder">
                            <Code step="create"/>
                            <button className="button button--primary button-block"
                                onClick={this.createCrab}>
                                Execute code
                            </button>
                        </div>
                        <div className="sideHolder">
                            <Output output={this.state.output} error={this.state.error}>
                                <Link
                                    className="button button--primary button-block"
                                    to={{
                                        pathname: '/retrieve',
                                        state: {
                                            crab: this.state.crab,
                                            keypair: this.state.keypair
                                        }
                                    }}>
                                    Next step: retrieve
                                </Link>
                            </Output>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create
