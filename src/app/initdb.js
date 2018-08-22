import Orm from 'bigchaindb-orm'

console.log(process.env.BDB_URL)
const orm = new Orm(process.env.BDB_URL, { 'app_id': 'crabby', 'app_key': 'as' })
orm.define('crab', 'https://example.com/v1/crab')

export default orm;
