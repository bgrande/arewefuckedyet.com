#!/bin/bash
source .env

rm -rf dist/*
sleep 1
NODE_ENV=$APP_ENV npx tailwindcss --no-autoprefixer -o ./dist/tailwind.css --minify
sleep 1
cp index.html dist/index.html
sed -i ":a;N;\$!ba;s/$DEV_LOG_PATH/$LOG_PATH/g" dist/index.html
#cp -r service dist/
#rm dist/service/composer*
#rm -rf dist/service/data/usage/*
#cp -r img dist/
#cp -r vid dist/