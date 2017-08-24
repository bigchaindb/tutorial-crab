import BdbOrm from './bdborm/orm'

const orm = new BdbOrm("http://localhost:9984/api/v1/","appid")
orm.define("crab","https://example.com/v1/crab")

module.exports = orm;
