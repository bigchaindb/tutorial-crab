import Connection from './connection'
import ormObject from './ormobject'

export default class Orm {
    constructor(connectionUrl, appId) {
        this.connection = new Connection(connectionUrl)
        this.appId = appId
    }
    define(modelName, modelShema) {
        this[modelName] = new ormObject(modelName, modelShema, this.connection, this.appId)
    }
}
