import Bbdbconn from './bdbconn'
import Bdbobject from './bdbobject'

export default class Bdborm {
    constructor(serverUrl, appId) {
        this.dbdconn = new Bbdbconn(serverUrl)
        this.appId = appId
        this.models = {}
    }
    define(modelName, modelShemaUrl) {
        this.models[modelName] = new Bdbobject(modelName, modelShemaUrl, this.dbdconn, this.appId)
    }
}
