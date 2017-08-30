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
                        metadata: { key: 'newvalue' }
                    })
                }
            })
            .then((appendedCrab) => {
                this.setState({
                    output: JSON.stringify(appendedCrab.metadata, null, 2)
                })
            })
            .catch(err => {
                this.setState({
                    error: getErrorMessage(err)
                })
            })
    }
    render() {
        return (
            <div className="row row--wide">
                <div>
                    <h1>Append</h1>
                  Append crab data.<br/><br/>
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
                        <Output output={this.state.output} error={this.state.error}/>
                        { this.state.output ?
                            <Link className="button button--primary button-block" to="/burn">
                                Next step: burn
                            </Link>
                            : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Append
