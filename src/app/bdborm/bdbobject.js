import uuid from 'uuid/v4';

export default class Bdbobject {

    constructor (modelName, modelShemaUrl, dbdconn, appId = "", transaction = {}) {
        this.name = modelName
        this.shemaUrl = modelShemaUrl
        this.bdb = dbdconn
        this.appId = appId
        this.transaction = transaction
    }

    newSelf(transaction) {
        return new Bdbobject(this.name, this.shemaUrl, this.bdb, this.appId, transaction)
    }

    getUnspent(assetId) {
        return this.getTransactions(assetId).then((transactions)=>{
            return transactions[transactions.length-1]
        })
    }

    getTransactions(assetId) {
        return this.bdb.listTransactions(assetId)
            .then((txList) => {
              Promise.all(txList.map(tx => this.bdb.getTransaction(tx.id)))
            })
    }

    generateDidId () {
        return `did:bdb:${uuid()}`
    }

    setOwner (identity) {
        this.owner = identity;
    }

    loadDITemplate(didId,publicKey){
        return {
            '@context': `https://example.org/did/v1/${this.name}`,
            'id': didId,
            'owner': [{
                'id': `${didId}#${publicKey}`,
                'type': ['CryptographicKey', 'RsaPublicKey'],
                'expires': '2026-03-22T00:00:00Z',
                'publicKeyPem': publicKey
            }]
        }
    }

    search() {
        return this.bdb.searchAssets(`"${this.name}"`)
            .then(assetIds =>
                Promise.all(assetIds.map(assetId =>
                    this.bdb.getTransaction(assetId)
                        .then(transaction => {
                            return this.newSelf(this.bdb.getAssetId(transaction))
                        })
                ))
            )
    }

    load(assetId) {
        return this.bdb.getTransaction(assetId)
                .then(transaction => {
                    //return this.newSelf(this.bdb.getAssetId(transaction))
                    this.getUnspent(this.bdb.getAssetId(this.transaction)).then((transaction)=>{
                        return this.newSelf(transaction)
                    })
            })
    }

    create(inputs) {
        if (inputs === undefined || inputs.owner === undefined) {
            console.error("owner missing")
        }
        const didId = this.generateDidId()
        const didTemplate = this.loadDITemplate(didId, inputs.owner.publicKey)
        const assetPayload = {}
        assetPayload[this.name] = {
          '@context': didTemplate['@context'],
          'id': didTemplate['id']
        }
        return this.bdb.publish(
            inputs.owner.publicKey,
            inputs.owner.privateKey,
            assetPayload,
            didTemplate
        )
        .then(tx => {
            return this.newSelf(tx)
        })
        .catch(err => console.error(err))
    }

    append( inputs ) {
        if (inputs === undefined) {
            console.error("inputs missing")
        }
        return this.bdb.transfer(
            this.transaction,
            inputs.authorizedBy.publicKey,
            inputs.authorizedBy.privateKey,
            inputs.toPublicKey,
            inputs.append
        )
        .then(() => {
            this.getUnspent(this.bdb.getAssetId(this.transaction)).then((transaction)=>{
                return this.newSelf(transaction)
            })
        })
        .catch((err) => console.error(err))
    }

}
