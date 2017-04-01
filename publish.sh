#!/usr/bin/env bash

rm index.zip
cd src
zip -X -r ../index.zip * > output.txt
cd ..
aws lambda update-function-code --function-name PrincetoNN  --zip-file fileb://index.zip

