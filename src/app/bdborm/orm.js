import Connection from './connection'
import ormObject from './ormobject'

export default class Orm {
    constructor(connectionUrl, headers) {
        this.connection = new Connection(connectionUrl)
        this.appId = headers.app_id
    }
    define(modelName, modelShema) {
        this[modelName] = new ormObject(
            modelName,
            modelShema,
            this.connection,
            this.appId
        )
    }
}
