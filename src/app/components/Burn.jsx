import React from 'react'
import { Link } from 'react-router-dom'

import TutorialStep from './TutorialStep'
import Code from './Code'
import Output from './Output'

import getErrorMessage from '../getErrorMessage'
import bdborm from '../initdb'

class Burn extends TutorialStep {
    constructor(props) {
        super(props)
        this.burnCrab = this.burnCrab.bind(this)
    }
    burnCrab() {
        this.setState({
            output: null,
            error: null,
        })
        bdborm.crab
            .retrieve(this.state.crab.id)
            .then(crabs => {
                if (crabs.length) {
                    return crabs[0].burn(
                        {
                            keypair: this.state.keypair
                        })
                }
            })
            .then((burnedCrab) => {
                this.setState({
                    output: JSON.stringify(
                        burnedCrab.transactionList.reverse().map(tx => tx.metadata)
                        , null, 2)
                })
                localStorage.clear()
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
                            <h2>Burn/Delete</h2>
                            <p>
                                When the lifecyle of our asset is over, we would typically delete it.
                                But then again, deleting from an immutable ledger is not possible.
                                One way of simulating a delete action is to <code>.burn()</code> the asset:
                                assign the ownership to a randomized public key. This safeguards you from
                                polynomial attackers. The <code>OrmObject</code> will assign a random publicKey
                                and even attaches a simple state update that the object is <code>BURNED</code>.
                            </p>
                        </section>
                    </div>
                    <div className="exampleHolder">
                        <div className="sideHolder">
                            <Code step="burn"/>
                            <button className="button button--primary button-block" onClick={this.burnCrab}>
                                Execute code
                            </button>
                        </div>
                        <div className="sideHolder">
                            <Output burn={true} output={this.state.output} error={this.state.error}>
                                <Link className="button button--primary button-block" to="/">
                                    Yaay, Finished
                                </Link>
                            </Output>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Burn
