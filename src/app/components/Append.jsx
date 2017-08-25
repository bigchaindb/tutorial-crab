import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'

import Code from './Code'
import Output from './Output'

import bdborm from '../initdb'

class Append extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            output: ''
        }
        this.appendCrab = this.appendCrab.bind(this)
    }
    appendCrab() {
        this.aliceKeypair = new driver.Ed25519Keypair()
        bdborm.crab.create({
            keypair: this.aliceKeypair,
            metadata: { key: 'metavalue' } })
            .then((crab) => {
                crab.append({
                    toPublicKey: this.aliceKeypair.publicKey,
                    keypair: this.aliceKeypair,
                    metadata: { key: 'newvalue' }
                })
                    .then((appendedCrab) => {
                        this.setState({ output: JSON.stringify(appendedCrab.metadata, null, 2) })
                    })
                    .catch(error => console.error(error))
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
                        <Output output={this.state.output}/>
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
