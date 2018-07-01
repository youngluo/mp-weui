#!/usr/bin/env sh

# abort on errors
set -e

# build
npm version patch -m v%s

npm publish

git push

git push --tags
