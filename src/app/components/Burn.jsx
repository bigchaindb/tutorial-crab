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
        bdborm.models.crab.create({owner:this.bobKeypair}).then((crab)=>{
            this.setState({output:JSON.stringify(crab.transaction.asset.data.crab,null,2)})
        })
    }
    render() {
        return (
          <div className="row row--wide">
              <div>
                  <h1>Burn</h1>
                  Burn crab data. {this.state.identityBob.privateKey},{this.state.identityBob.publicKey},{this.state.identityAlice.privateKey},{this.state.identityAlice.publicKey}<br/><br/>
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
