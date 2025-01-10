#!/bin/bash

# path of this script
MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd "$MY_DIR/../src"

perl -pi -e 's/csr = dev/csr = true/' `$MY_DIR/findword 'csr = dev'`
yarn run build
perl -pi -e 's/csr = true/csr = dev/' `$MY_DIR/findword 'csr = true'`
yarn run deploy
