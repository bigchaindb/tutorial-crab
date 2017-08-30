import React from 'react'
import { Link } from 'react-router-dom'

import TutorialStep from './TutorialStep'
import Code from './Code'
import Output from './Output'

import getErrorMessage from '../getErrorMessage'
import bdborm from '../initdb'

class Append extends TutorialStep {
    constructor(props) {
        super(props)
        this.appendCrab = this.appendCrab.bind(this)
    }
    appendCrab() {
        this.setState({
            output: null,
            error: null,
        })

        bdborm.crab
            .retrieve(this.state.crab.id)
            .then(crabs => {
                if (crabs.length) {
                    return crabs[0].append({
                        toPublicKey: this.state.keypair.publicKey,
                        keypair: this.state.keypair,
                        metadata: { color: 'red' }
                    })
                }
            })
            .then((appendedCrab) => {
                this.setState({
                    output: JSON.stringify(appendedCrab.metadata, null, 2)
                })
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
                            <h2>Append/Update</h2>
                            <p>
                                Since blockchains do not allow to tamper with the past,
                                it is not possible to update an existing value by overwriting it.
                                The way to go is to <code>.append(update)</code> the update to the asset.
                                This will trigger a <code>TRANSFER</code> transaction with the update attached as
                                metadata. For a simple update without ownership change, you can simply
                                use your own public key in <code>toPublicKey</code>.
                            </p>
                            <p>
                                The <code>OrmObject</code> will update the instance for you and append the latest
                                state to the history of transactions.
                            </p>
                        </section>
                    </div>
                    <div className="exampleHolder">
                        <div className="sideHolder">
                            <Code step="append"/>
                            <button className="button button--primary button-block"
                                onClick={this.appendCrab}>
                                Execute code
                            </button>
                        </div>
                        <div className="sideHolder">
                            <Output append={true} output={this.state.output} error={this.state.error}>
                                <Link className="button button--primary button-block" to="/burn">
                                    Next step: burn
                                </Link>
                            </Output>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Append
