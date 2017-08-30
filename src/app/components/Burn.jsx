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
                    output: JSON.stringify(burnedCrab.metadata, null, 2)
                })
                localStorage.clear()
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
                    <h1>Burn</h1>
                    <div>Burn crab data.</div><br/>
                </div>
                <div className="exampleHolder">
                    <div className="sideHolder">
                        <Code step="burn"/>
                        <button className="button button--primary button-block" onClick={this.burnCrab}>
                            Execute code
                        </button>
                    </div>
                    <div className="sideHolder">
                        <Output output={this.state.output} error={this.state.error}/>
                        { this.state.output ?
                            <Link className="button button--primary button-block" to="/">
                                Back home
                            </Link>
                            : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Burn
