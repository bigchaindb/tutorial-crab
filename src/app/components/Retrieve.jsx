import React from 'react'
import { Link } from 'react-router-dom'

import Code from './Code'
import Output from './Output'
import TutorialStep from './TutorialStep'

import bdborm from '../initdb'

class Read extends TutorialStep {
    constructor(props) {
        super(props)
        this.state = {
            output: null,
            error: null
        }
        this.retrieveCrab = this.retrieveCrab.bind(this)
    }
    retrieveCrab() {
        this.setState({
            error: null,
        })
        bdborm.crab
            .retrieve(this.state.crab.id)
            .then(crabs => {
                console.log(crabs)
                const crabIds = crabs.map(crab => crab.id)
                this.setState({ output: JSON.stringify(crabIds, null, 2) })
            })
            .catch(() => {
                this.setState({
                    error: 'Something went wrong!',
                })
            })
    }
    render() {
        return (
            <div className="row row--wide">
                <div>
                    <h1>Retrieve</h1>
                    <div>Retrieve asset you created earlier.</div>
                    <br/>
                </div>
                <div className="exampleHolder">
                    <div className="sideHolder">
                        <Code step="retrieve"/>
                        <button className="button button--primary button-block"
                            onClick={this.retrieveCrab}>
                            Execute code
                        </button>
                    </div>
                    <div className="sideHolder">
                        <Output output={this.state.output}/>
                        { this.state.output ?
                            <Link
                                className="button button--primary button-block"
                                to={{
                                    pathname: '/append',
                                    state: {
                                        crab: this.state.crab,
                                        keypair: this.state.keypair
                                    }
                                }}>
                                Next step: append
                            </Link>
                            : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Read
