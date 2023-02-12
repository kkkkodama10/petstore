#!/usr/bin/env bash

cd "$(dirname "$0")" || exit

export APPS_SERVER_DIR=${PWD}/server
export APPS_SERVER_PACKAGE_NAME=base
rm -rf ${APPS_SERVER_DIR}/${APPS_SERVER_PACKAGE_NAME}

rm -rf generate-server-tmp
mkdir generate-server-tmp

docker run --rm -v "${PWD}":/local \
  openapitools/openapi-generator-cli:v5.1.1 \
  generate \
  -i /local/open_api.yml \
  -g nodejs-express-server \
  -o /local/generate-server-tmp \
  -p packageName=base \
  --global-property skipFormModel=false

cp -n -r generate-server-tmp/ ${APPS_SERVER_DIR}

rm -rf generate-server-tmp