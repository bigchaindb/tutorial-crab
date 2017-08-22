import * as driver from 'bigchaindb-driver' // eslint-disable-line import/no-namespace
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Code from './Code'
import Output from './Output'

import bdborm from '../bdborm/bdbinit'

class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ""
        }
        this.readCrab = this.readCrab.bind(this);
    }
    readCrab(){
        bdborm.models.crab.search().then((crabs)=>{
            this.setState({output:JSON.stringify(crabs[crabs.length-1].transaction.asset.data.crab,null,2)})
        })
    }
    render() {
        return (
          <div className="row row--wide">
              <div>
                  <h1>Read</h1>
                  <div>Read asset you created earlier.</div>
                  <br/>
              </div>
              <div className="exampleHolder">
                  <div className="sideHolder">
                      <Code step="read" language="nodejs"/>
                      <button className="button button--primary button-block" onClick={this.readCrab}>
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

export default Read
