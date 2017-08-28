import React from 'react'

class Code extends React.Component {

    home() {
        return (
            <div className="code-example">
                <pre>
                    <code>
                        <div className="comment">// import orm</div>
                        <div><span className="c">import Orm from 'bigchaindb-orm'</span></div>
                        <div className="comment">// connect to bigchaindb</div>
                        <div><span className="c">const bdborm = new Orm("https://test.ipdb.io/api/v1/",{'{'}</span></div>
                        <div><span className="ci">app_id: "Get one from developers.ipdb.io",</span></div>
                        <div><span className="ci">app_key: "Same as app_id"</span></div>
                        <div><span className="c">{'})'}</span></div>
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
                        <div className="comment">// import bigchaindb-driver</div>
                        <div><span className="c">import * as driver from 'bigchaindb-driver'</span></div>
                        <div className="comment">// create public and private key for Alice</div>
                        <div><span className="c">const aliceKeypair = new driver.Ed25519Keypair()</span></div>
                        <div className="comment">// from defined models in our bdborm</div>
                        <div className="comment">// we create crab with Alice as owner</div>
                        <div><span className="c">{'bdborm.crab.create({'}</span></div>
                        <div><span className="ci">keypair: aliceKeypair,</span></div>
                        <div><span className="ci">metadata: {"{key:'metavalue'}"}</span></div>
                        <div><span className="c">{'}).then((crab)=>{'}</span></div>
                        <div><span className="ci comment">// crab is object with all our data and functions</span></div>
                        <div><span className="ci comment">// crab.id is id of crab</span></div>
                        <div><span className="ci comment">// crab.metadata is metadata of last transaction</span></div>
                        <div><span className="ci comment">// crab.transactionList is transaction history</span></div>
                        <div><span className="ci">console.log(crab.id)</span></div>
                        <div><span className="c">{'}'}</span></div>
                    </code>
                </pre>
            </div>
        )
    }

    retreive() {
        return (
            <div className="code-example">
                <pre>
                    <code>
                        <div className="comment">// get all crabs with retrieve()</div>
                        <div className="comment">// or get specific crab with retrieve("crabid")</div>
                        <div><span className="c">bdborm.crab.retrieve().then((crabs)=>{'{'}</span></div>
                        <div><span className="ci comment">// output is array of crabs</span></div>
                        <div><span className="ci comment">// lets output ids of our crabs</span></div>
                        <div><span className="ci">console.log(crabs.map(crab=>{'{'}return crab.id{'}'}))</span></div>
                        <div><span className="c">{'}'}</span></div>
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
                        <div><span className="c">import * as driver from 'bigchaindb-driver'</span></div>
                        <div className="comment">// create public and private key for Alice</div>
                        <div><span className="c">const aliceKeypair = new driver.Ed25519Keypair()</span></div>
                        <div className="comment">// create crab with Alice as owner</div>
                        <div><span className="c">{'bdborm.crab.create({'}</span></div>
                        <div><span className="ci">keypair: aliceKeypair,</span></div>
                        <div><span className="ci">metadata: {"{key:'metavalue'}"}</span></div>
                        <div><span className="c">{'}).then((crab)=>{'}</span></div>
                        <div><span className="ci comment">// lets append metadata of our crab</span></div>
                        <div><span className="ci">crab.append({'{'}</span></div>
                        <div><span className="ci2">toKeypair: aliceKeypair.publicKey,</span></div>
                        <div><span className="ci2">keypair: aliceKeypair,</span></div>
                        <div><span className="ci2">metadata: {"{key:'newvalue'}"}</span></div>
                        <div><span className="ci">{'}).then((appendedCrab)=>{'}</span></div>
                        <div><span className="ci2 comment">// appendedCrab is last state</span></div>
                        <div><span className="ci2 comment">// of our crab so any actions</span></div>
                        <div><span className="ci2 comment">// need to be done to appendedCrab</span></div>
                        <div><span className="ci2">console.log(appendedCrab.metadata)</span></div>
                        <div><span className="ci">{'})'}</span></div>
                        <div><span className="c">{'})'}</span></div>
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
                        <div><span className="c">import * as driver from 'bigchaindb-driver'</span></div>
                        <div className="comment">// create public and private key for Alice</div>
                        <div><span className="c">const aliceKeypair = new driver.Ed25519Keypair()</span></div>
                        <div className="comment">// create crab with Alice as owner</div>
                        <div><span className="c">{'bdborm.crab.create({'}</span></div>
                        <div><span className="ci">keypair: aliceKeypair,</span></div>
                        <div><span className="ci">metadata: {"{key:'metavalue'}"}</span></div>
                        <div><span className="c">{'}).then((crab)=>{'}</span></div>
                        <div><span className="ci comment">// lets append metadata of our crab</span></div>
                        <div><span className="ci">crab.burn({'{'}</span></div>
                        <div><span className="ci2">keypair: aliceKeypair</span></div>
                        <div><span className="ci">{'}).then((burnedCrab)=>{'}</span></div>
                        <div><span className="ci2 comment">// crab burned sent to away</span></div>
                        <div><span className="ci2">console.log(burnedCrab.metadata)</span></div>
                        <div><span className="ci">{'})'}</span></div>
                        <div><span className="c">{'})'}</span></div>
                    </code>
                </pre>
            </div>
        )
    }

    render() {
        switch (this.props.step) {
            case 'home':
                return this.home()
            case 'create':
                return this.create()
            case 'retreive':
                return this.retreive()
            case 'append':
                return this.append()
            case 'burn':
                return this.burn()
            default:
                return this.home()
        }
    }
}

export default Code
