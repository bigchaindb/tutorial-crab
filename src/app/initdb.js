import Orm from 'bigchaindb-orm'

const orm = new Orm('https://ipdb-proxy.now.sh/api/v1/', { 'app_id': 'crabby', 'app_key': 'as' })
orm.define('crab', 'https://example.com/v1/crab')

module.exports = orm
