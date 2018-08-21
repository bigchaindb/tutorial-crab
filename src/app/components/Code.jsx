import React from 'react'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light";
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import zenburn from 'react-syntax-highlighter/styles/hljs/zenburn';

registerLanguage('javascript', js);

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
    "https://test.bigchaindb.com/api/v1/",
    {
        app_id: "Get one from testnet.bigchaindb.com",
        app_key: "Get one from testnet.bigchaindb.com"
    }
)
// define(<model name>,<additional information>)
// <model name>: represents the name of model you want to store
// <additional inf.>: any information you want to pass about the model (can be string or object)
// note: cannot be changed once set!
bdbOrm.define("crabModel", "https://schema.org/v1/crab")
// create a public and private key for Alice
const aliceKeypair = new bdbOrm.driver.Ed25519Keypair()
`
        return this.renderCode(code)
    }

    create() {
        const code = `// from the defined models in our bdbOrm
// we create a crab with Alice as owner
bdbOrm.models.crabModel
    .create({
        keypair: aliceKeypair,
        data: {
            breed: 'coconut crab',
            color: 'blue'
        }
    })
    .then(crab => {
        // crab is an object with all data & functions
        // crab.id equals the id of the asset
        // crab.data is latest version
        // crab.transactionHistory gives the full history
        console.log(crab)
    })
`
        return this.renderCode(code)
    }

    retrieve() {
        const code = `// get all crabs with retrieve()
// or get a specific crab with retrieve(crab.id)
bdbOrm.models.crabModel
    .retrieve(crab.id)
    .then(crabs => {
        // crabs is an array of crabModel
        console.log(crabs.map(crab => crab.data))
    })
`
        return this.renderCode(code)
    }

    append() {
        const code = `// update our retrieved crab
crab.append(
    {
        toPublicKey: aliceKeypair.publicKey,
        keypair: aliceKeypair,
        data: { color: 'red' }
    })
    .then(updatedCrab => {
        // updatedCrab contains the last (unspent) state
        // of our crab so any actions
        // need to be done to updatedCrab
        console.log(updatedCrab.data)
    })
`
        return this.renderCode(code)
    }

    burn() {
        const code = `// burn our retrieved crab
crab.burn(
    {
        keypair: aliceKeypair
    })
    .then(burnedCrab => {
        // crab is now tagged as "burned",
        // the new publicKey is randomized
        // and the corresponding privateKey "lost"
        console.log(burnedCrab.transactionHistory.reverse()
            .map(tx => tx.data))
    })
`
        return this.renderCode(code)
    }

    render() {
        switch (this.props.step) {
            case 'home':
                return this.home()
            case 'create':
                return this.create()
            case 'retrieve':
                return this.retrieve()
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
