import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Code from './Code'
import Output from './Output'

import bdborm from '../initdb'

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ""
        }
        this.createCrab = this.createCrab.bind(this);
    }
    createCrab(){
        this.aliceKeypair = new driver.Ed25519Keypair()
        bdborm.crab.create({publicKey:this.aliceKeypair.publicKey,privateKey:this.aliceKeypair.privateKey,metadata:{meta:'toMeta4You'}}).then((crab)=>{
            this.setState({output:JSON.stringify(crab.id,null,2)})
            localStorage.setItem('crabid', crab.id);
        })
    }
    render() {
        return (
            <div className="row row--wide">
                <div>
                    <h1>Create</h1>
                    <div>Create the crab asset</div>
                    <br/>
                </div>
                <div className="exampleHolder">
                    <div className="sideHolder">
                        <Code step="create" language="nodejs"/>
                        <button className="button button--primary button-block" onClick={this.createCrab}>
                            Execute code
                        </button>
                    </div>
                    <div className="sideHolder">
                        <Output output={this.state.output}/>
                    </div>
                </div>
            </div>
          )
    }
}

export default Create
