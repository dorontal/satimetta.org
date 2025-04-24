#!/bin/bash

# exit on any error
set -e

# path of this script
MY_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# increment the version
$MY_DIR/increment_version.sh

# commit, with new version number as the commit message
VERSION="`cat $MY_DIR/../VERSION`"

cd "$MY_DIR/../src"

git add -A
git commit -m "$VERSION"
git push

# deploy

$MY_DIR/deploy.sh
