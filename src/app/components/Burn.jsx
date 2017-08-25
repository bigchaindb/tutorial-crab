import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Code from './Code'
import Output from './Output'

import bdborm from '../initdb'

class Burn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: "",
            identityAlice: JSON.parse(localStorage.getItem('identityAlice')),
            identityBob: JSON.parse(localStorage.getItem('identityBob'))
        }
        this.burnCrab = this.burnCrab.bind(this);
    }
    burnCrab(){
      this.aliceKeypair = new driver.Ed25519Keypair()
      bdborm.crab.create({keypair:this.aliceKeypair,metadata:{key:'metavalue'}}).then((crab)=>{
          crab.burn({
              keypair: this.aliceKeypair
          })
          .then((burnedCrab)=>{
              this.setState({output:JSON.stringify(burnedCrab.metadata,null,2)})
          })
          .catch(error=>console.error(error))
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
                      <Code step="burn" language="nodejs"/>
                      <button className="button button--primary button-block" onClick={this.burnCrab}>
                          Execute code
                      </button>
                  </div>
                  <div className="sideHolder">
                      <Output display="object"/>
                  </div>
              </div>
          </div>
        )
    }
}

export default Burn
