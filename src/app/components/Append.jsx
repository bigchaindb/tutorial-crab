import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Code from './Code'
import Output from './Output'

import bdborm from '../bdborm/bdbinit'

class Append extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ""
        }
        this.appendCrab = this.appendCrab.bind(this);
    }
    appendCrab(){
        this.aliceKeypair = new driver.Ed25519Keypair()
        bdborm.models.crab.create({owner:this.aliceKeypair}).then((crab)=>{

            console.log("created crab")
            console.log(crab)

            const appendData = {status:'appended crabby'}
            crab.append({
                toPublicKey: this.aliceKeypair.publicKey,
                authorizedBy: this.aliceKeypair,
                append: appendData
            }).then((apendedCrab)=>{
                console.log("appended crab")
                console.log(apendedCrab)
                this.setState({output:JSON.stringify(apendedCrab.transaction.asset.data.crab,null,2)})
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
                      <Code step="append" language="nodejs"/>
                      <button className="button button--primary button-block" onClick={this.appendCrab}>
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

export default Append
