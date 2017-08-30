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
            crab is an object with all data & functions
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
        const code = `// update our retrieved crab
crab.append(
    {
        toPublicKey: aliceKeypair.publicKey,
        keypair: aliceKeypair,
        metadata: { key: 'updatedValue' }
    })  
    .then(updatedCrab => {
        // updatedCrab contains the last (unspent) state
        // of our crab so any actions
        // need to be done to updatedCrab
        console.log(updatedCrab.metadata)
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
        console.log(burnedCrab.metadata)
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
