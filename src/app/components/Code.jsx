import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { zenburn } from 'react-syntax-highlighter/dist/styles'


class Code extends React.Component {
    renderCode(code) {
        return (
            <div className="code-example">
                <div className="code-example__header">
                    JavaScript
                </div>
                <div className="code-example__body">
                    <SyntaxHighlighter language='javascript' style={zenburn}
                        customStyle={{
                            background: 'inherit'
                        }}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        )
    }

    home() {
        const code = `// import bigchaindb-orm
import Orm from 'bigchaindb-orm'
// connect to BigchainDB
const bdbOrm = new Orm(
    "https://test.ipdb.io/api/v1/",
    {
        app_id: "Get one from developers.ipdb.io",
        app_key: "Same as app_id"
    }
)
// define our models and assets
bdbOrm.define("crabModel", "https://schema.org/v1/crab")
// create a public and private key for Alice
const aliceKeypair = new driver.Ed25519Keypair()
`
        return this.renderCode(code)
    }

    create() {
        const code = `// from the defined models in our bdbOrm 
//we create a crab with Alice as owner
bdbOrm.crabModel
    .create({
        keypair: aliceKeypair,
        metadata: { key: 'metadataValue' }
    })
    .then(crab => {
        /*
            crab is an object with all our data and functions
            crab.id equals the id of the asset
            crab.metadata is latest version
            crab.transactionList gives the full history
        */
        console.log(crab.id)
    })
`
        return this.renderCode(code)
    }

    retrieve() {
        const code = `// get all crabs with retrieve()
// or get a specific crab with retrieve(crab.id)
bdbOrm.crabModel
    .retrieve(crab.id)
    .then(crabs => {
        // crabs is an array of crabModel
        console.log(crabs.map(crab => crab.id))
    })
`
        return this.renderCode(code)
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
