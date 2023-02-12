#!/usr/bin/env bash

cd `dirname $0`

export CLIENT_DIR=${PWD}/../src/app/services
rm -rf ${CLIENT_DIR}

rm -rf generate-client-tmp
mkdir generate-client-tmp

docker run --rm -v ${PWD}:/local \
  openapitools/openapi-generator-cli:v5.1.1 \
  generate \
  -i /local/open_api.yml \
  -g typescript-angular \
  -o /local/generate-client-tmp \
  --global-property skipFormModel=false \
  --additional-properties="apiModulePrefix=PetStore"

# Client modules generated by typescript-angular sends the 'object' in the form as binary data,
# but connexion server (in Python) accepts the text data, so modify client to send the text data.
sed \
  -e "s|new Blob(\[JSON\.stringify(\(.*\))\], {type: 'application/json'})|JSON.stringify(\1)|g" \
  < generate-client-tmp/api/preprocess.service.ts \
  > tmp.preprocess.service.ts
mv tmp.preprocess.service.ts generate-client-tmp/api/preprocess.service.ts

mv generate-client-tmp ${CLIENT_DIR}

rm -rf generate-client-tmp