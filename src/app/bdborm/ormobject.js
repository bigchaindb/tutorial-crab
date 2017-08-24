import uuid from 'uuid/v4';

export default class OrmObject {

    constructor (modelName, modelShema, connection, appId = "", transactionList = []) {
        this._name = modelName
        this._shema = modelShema
        this._connection = connection
        this._appId = appId
        if (transactionList.length) {
            this.transactionList = transactionList
            this.id = transactionList[0].asset.data[`${this._appId}-${this._name}`].id
            this.metadata = transactionList[transactionList.length-1].metadata
        }
    }

    retrieve(query) {
        if (query !== undefined) {
            return this._connection.searchAssets(`"${query}"`)
                .then(assetIds =>
                    Promise.all(assetIds.map(assetId =>
                        this._connection.getSortedTransactions(assetId).then((txList)=>{
                            return new OrmObject(this._name, this._shema, this._connection, this._appId, txList)
                        })
                    ))
                )
        } else {
            return this._connection.searchAssets(`"${this._appId}-${this._name}"`)
                .then(assetIds =>
                    Promise.all(assetIds.map(assetId =>
                        this._connection.getSortedTransactions(assetId).then((txList)=>{
                            return new OrmObject(this._name, this._shema, this._connection, this._appId, txList)
                        })
                    ))
                )
        }

    }

    create(inputs) {
        if (inputs === undefined) {
            console.error("inputs missing")
        }
        const assetPayload = {}
        assetPayload[`${this._appId}-${this._name}`] = {
          'shema': this._shema,
          'id': `id:${this._appId}:${uuid()}`
        }
        return this._connection.createTransaction(
            inputs.publicKey,
            inputs.privateKey,
            assetPayload,
            inputs.metadata
        )
        .then(tx => Promise.resolve(
            this._connection.getSortedTransactions(tx.id).then((txList)=>{
                return new OrmObject(this._name, this._shema, this._connection, this._appId, txList)
            })
        ))
        .catch(err => console.error(err))
    }

    append( inputs ) {
        if (inputs === undefined) {
            console.error("inputs missing")
        }
        return this._connection.transferTransaction(
            this.transactionList[this.transactionList.length-1],
            inputs.publicKey,
            inputs.privateKey,
            inputs.toPublicKey,
            inputs.append
        )
        .then(() => Promise.resolve(
            this._connection.getSortedTransactions(this.transactionList[0].id).then((txList)=>{
                return new OrmObject(this._name, this._shema, this._connection, this._appId, txList)
            })
        ))
        .catch((err) => console.error(err))
    }

    burn( inputs ) {
        if (inputs === undefined) {
            console.error("inputs missing")
        }
        return this._connection.transferTransaction(
            this.transactionList[this.transactionList.length-1],
            inputs.publicKey,
            inputs.privateKey,
            "",
            {}
        )
        .then(() => Promise.resolve(
            this._connection.getSortedTransactions(this.transactionList[0].id).then((txList)=>{
                return new OrmObject(this._name, this._shema, this._connection, this._appId, txList)
            })
        ))
        .catch((err) => console.error(err))
    }

}
