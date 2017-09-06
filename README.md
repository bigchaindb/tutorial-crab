# [![tutorial-crab](media/repo-banner@2x.png)](https://www.bigchaindb.com)

> A tutorial website using and explaining js-driver-orm use on BigchainDB with interactive examples.

## Clone
Clone or fork this repo

https://github.com/bigchaindb/tutorial-crab.git

```bash
git clone git@github.com:bigchaindb/tutorial-crab.git my-bigchaindb-project
```

and

```bash
cd my-bigchaindb-project
```

Now you can set your remotes to your local app and so forth

## Quickstart with Docker (Windows, OSX, lazy Linux)

> Supports BigchainDB Server v1.0

### Prequisites

You must have `docker`, `docker-compose` (and `make`) installed.
These versions or higher should work:

- `docker`: `v1.13.0`
- `docker-compose`: `v1.7.1`

### Make or docker-compose

To spin up the services, simple run the make command, which will orchestrate `docker-compose`

```bash
make
```

This might take a few minutes, perfect moment for a :coffee:!

Once docker-compose has built and launched all services, have a look:

```bash
docker-compose ps
```

```
            Name                          Command               State                        Ports                       
------------------------------------------------------------------------------------------------------------------------
mybigchaindbproject_bdb_1      bigchaindb start                 Up      0.0.0.0:49984->9984/tcp, 0.0.0.0:49985->9985/tcp
mybigchaindbproject_client_1   npm run serve                    Up      0.0.0.0:4000->4000/tcp   
mybigchaindbproject_mdb_1      docker-entrypoint.sh mongo ...   Up      0.0.0.0:32797->27017/tcp                        
```

Which means that the internal docker port for the API is `9984`
and the external one is `49984`.

The external ports might change, so for the following use the ports as indicated by `docker-compose ps`.

You can simply check if it's running by going to [`http://localhost:4000/crab`](http://localhost:4000/crab).

If you already built the images and want to `restart`:

```bash
make restart
```

Stop (and remove) the containers with

```bash
make stop
```

### Launch docker-compose services manually

No make? Launch the services manually:

Launch MongoDB:

```bash
docker-compose up -d mdb
```

Wait about 10 seconds and then launch the server & client:

```bash
docker-compose up -d bdb
docker-compose up -d client
```

## BigchainDB javascript ORM driver

see the [js-driver-orm](https://github.com/bigchaindb/js-driver-orm) for more details

## License

```
Copyright 2017 BigchainDB GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
