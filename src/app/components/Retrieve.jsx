import React from 'react'
import { Link } from 'react-router-dom'

import Code from './Code'
import Output from './Output'
import TutorialStep from './TutorialStep'

import getErrorMessage from '../getErrorMessage'
import bdborm from '../initdb'

class Read extends TutorialStep {
    constructor(props) {
        super(props)
        this.retrieveCrab = this.retrieveCrab.bind(this)
    }
    retrieveCrab() {
        this.setState({
            output: null,
            error: null,
        })
        bdborm.crab
            .retrieve(this.state.crab.id)
            .then(crabs => {
                const crabIds = crabs.map(crab => crab.metadata)
                this.setState({ output: JSON.stringify(crabIds, null, 2) })
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
                            <h2>Retrieve</h2>
                            <p>
                                The <code>.retrieve(query)</code> function is useful when we want
                                to fetch existing assets from the network. When no query is provided, you will
                                retrieve all assets as <code>OrmObject</code> of the model.
                                If you don't want to retrieve <i>all</i> assets, you can filter your request by using the
                                <a href="https://blog.bigchaindb.com/introducing-queryable-assets-in-bigchaindb-v-1-0-adbe1b86e622" target="_blank"> query language </a>
                                in BigchainDB.
                            </p>
                        </section>
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
                            <Output output={this.state.output} error={this.state.error}>
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
                            </Output>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Read
