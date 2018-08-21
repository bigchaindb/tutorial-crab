#!/usr/bin/env bash

aws s3 rm s3://tutorials.bigchaindb.com/crab --recursive
aws s3 cp ./dist s3://tutorials.bigchaindb.com/crab/ --recursive --acl public-read --cache-control 'public, max-age=0'