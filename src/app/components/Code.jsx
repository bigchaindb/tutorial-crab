import React from 'react'

class Code extends React.Component {

    home() {
        return (
            <div className="code-example">
                <pre>
                    <code>
                        <div className="comment">// import bdborm</div>
                        <div><span className="c">import Bdborm from '../bdborm'</span></div>
                        <div className="comment">// connect to bigchaindb</div>
                        <div><span className="c">const bdborm = new Bdborm("http://localhost","appId")</span></div>
                        <div className="comment">// define our models and assets</div>
                        <div><span className="c">bdborm.define("crab","https://example.com/v1/crab")</span></div>
                        <div className="comment">// export our dbdorm</div>
                        <div><span className="c">module.exports = bdborm;</span></div>
                    </code>
                </pre>
            </div>
        )
    }

    create() {
        return (
            <div className="code-example">
                <pre>
                    <code>
                        <div className="comment">// import our bdborm</div>
                        <div><span className="c">import bdborm from './bdborm'</span></div>
                        <div className="comment">// import bigchaindb-driver</div>
                        <div><span className="c">import * as driver from 'bigchaindb-driver'</span></div>
                        <div className="comment">// create public and private key for Alice</div>
                        <div><span className="c">const aliceKeypair = new driver.Ed25519Keypair()</span></div>
                        <div className="comment">// from defined models in our bdborm</div>
                        <div className="comment">// we create crab with Alice as owner</div>
                        <div><span className="c">{"bdborm.crab.create({"}</span></div>
                        <div><span className="ci">publicKey: aliceKeypair.publicKey,</span></div>
                        <div><span className="ci">privateKey: aliceKeypair.privateKey,</span></div>
                        <div><span className="ci">metadata: {"{key:metavalue}"}</span></div>
                        <div><span className="c">{"}).then((crab)=>{"}</span></div>
                        <div><span className="ci comment">// crab is object with all our data and functions</span></div>
                        <div><span className="ci comment">// crab.id is id of crab</span></div>
                        <div><span className="ci comment">// crab.metadata is metadata of last transaction</span></div>
                        <div><span className="ci comment">// crab.transactionList is list of raw transaction history</span></div>
                        <div><span className="ci">console.log(crab.id)</span></div>
                        <div><span className="c">{"}"}</span></div>

                    </code>
                </pre>
            </div>
        )
    }

    read() {
        return (
            <div className="code-example">
                <pre>
                    <code>
                        <div className="comment">// import our bdborm</div>
                        <div><span className="c">import bdborm from './bdborm'</span></div>
                        <div className="comment">// search for our assets</div>
                        <div><span className="c">bdborm.models.crab.search().then((crabs)=>{'{'}</span></div>
                        <div><span className="ci comment">// crabs is array of crab objects</span></div>
                        <div><span className="ci comment">// lets output last created</span></div>
                        <div><span className="ci">console.log(crabs[crabs.length-1].transaction.asset.data.crab)</span></div>
                        <div><span className="c">{"}"}</span></div>
                    </code>
                </pre>
            </div>
        )
    }

    append() {
      return (
        <div className="code-example">
            <pre>
                <code>
                    <div className="comment">// append</div>
                    <div><span className="c">import Crab from '../didbdb/crab'</span></div>
                    <div className="comment">// create our identity</div>
                    <div><span className="c">const aliceKeypair = new driver.Ed25519Keypair()</span></div>
                    <div className="comment">// prepare our crab</div>
                    <div><span className="c">const crab = new Crab()</span></div>
                    <div className="comment">// we are the owners of our crab</div>
                    <div><span className="c">crab.setOwner(aliceKeypair)</span></div>
                    <div className="comment">// save our crab</div>
                    <div><span className="c">crab.create().then(()=>{'{'}</span></div>
                    <div><span className="ci">console.log(crab.transaction)</span></div>
                    <div><span className="c">})</span></div>
                </code>
            </pre>
        </div>
      )
    }

    burn() {
      return (
        <div className="code-example">
            <pre>
                <code>
                    <div className="comment">// burn</div>
                    <div><span className="c">import Crab from '../didbdb/crab'</span></div>
                    <div className="comment">// create our identity</div>
                    <div><span className="c">const aliceKeypair = new driver.Ed25519Keypair()</span></div>
                    <div className="comment">// prepare our crab</div>
                    <div><span className="c">const crab = new Crab()</span></div>
                    <div className="comment">// we are the owners of our crab</div>
                    <div><span className="c">crab.setOwner(aliceKeypair)</span></div>
                    <div className="comment">// save our crab</div>
                    <div><span className="c">crab.create().then(()=>{'{'}</span></div>
                    <div><span className="ci">console.log(crab.transaction)</span></div>
                    <div><span className="c">})</span></div>
                </code>
            </pre>
        </div>
      )
    }

    render() {
        switch(this.props.step) {
            case 'home':
                return this.home()
            case 'create':
                return this.create()
            case 'read':
                return this.read()
            case 'append':
                return this.append()
            case 'burn':
                return this.burn()
        }
    }
}

export default Code
