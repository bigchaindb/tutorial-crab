import Bdborm from './bdborm'

const bdborm = new Bdborm("http://localhost","appid")
bdborm.define("crab","https://example.com/v1/crab")
module.exports = bdborm;
