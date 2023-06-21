#!/bin/bash

mkdir -p build
mkdir -p dist
cp -r src build/firefox
cp -r src build/chrome
cp -r build/manifest.json build/chrome
node mixin.js firefox/manifest.json build/manifest.json

cp -r build/manifest.json build/firefox

cd build/chrome; zip -r ../../dist/chrome.zip *; cd ../..
cd build/firefox; zip -r ../../dist/firefox.xpi *; cd ../..

if [ -z "$1" ]
  then
    # No first argument supplied, deleting build dir
	rm -rf build
fi
