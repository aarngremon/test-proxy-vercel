#!/bin/bash

git config user.name "sklbz"
git config user.email "sokol.bozanic.sklbz@gmail.com"

git pull

echo "Bash script executed at $(date)" >>log.txt
cat .txt >>log.txt

git add .
git commit -m "check"
git push
