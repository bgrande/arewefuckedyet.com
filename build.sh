#!/bin/bash
source .env

# cleanup
rm -rf dist/*
sleep 1

# create and minify the css
NODE_ENV=$APP_ENV npx tailwindcss --no-autoprefixer -o ./dist/tailwind.css --minify

# create doomsday clock json
node clock.mjs
sleep 1

# copy file to target
cp index.html doomsday.json impress.html dist/
cp -r img dist/
cp .nojekyll dist/
cp favicon.ico favicon.svg icon.png tile.png tile-wide.png dist/
cp robots.txt site.manifest dist/

# some adjustments if necessary
sed -i ":a;N;\$!ba;s/$DEV_JSON_PATH/$JSON_PATH/g" dist/index.html
#sed -i ":a;N;\$!ba;s/$DEV_LOG_PATH/$LOG_PATH/g" dist/index.html
#cp -r service dist/
#rm dist/service/composer*
#rm -rf dist/service/data/usage/*
#cp -r img dist/
#cp -r vid dist/