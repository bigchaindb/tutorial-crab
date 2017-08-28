import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'
import { Link } from 'react-router-dom'

import Code from './Code'
import Output from './Output'

import bdborm from '../initdb'

class Read extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            output: ''
        }
        this.retrieveCrab = this.retrieveCrab.bind(this)
    }
    retrieveCrab() {
        bdborm.crab.retrieve()
            .then(crabs => {
                const crabIds = crabs.map(crab => crab.id)
                this.setState({ output: JSON.stringify(crabIds, null, 2) })
            })
            .catch(error => console.error(error))
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
                            <Link className="button button--primary button-block" to="/append">
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
