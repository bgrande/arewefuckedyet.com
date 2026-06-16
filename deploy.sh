#!/bin/bash
source .env

# copy file to target
cp index.html doomsday.json impress.html authors-take.html maybe-not.html dist/
cp -r img dist/
cp .nojekyll dist/
cp favicon.ico favicon.svg icon.png tile.png tile-wide.png dist/
cp sitemap.xml robots.txt site.webmanifest dist/

# some adjustments if necessary
sed ":a;N;\$!ba;s/$DEV_JSON_PATH/$JSON_PATH/g" dist/index.html > dist/index.html
sed ":a;N;\$!ba;s/$DEV_JSON_PATH/$JSON_PATH/g" dist/authors-take.html > dist/authors-take.html
sed ":a;N;\$!ba;s/$DEV_JSON_PATH/$JSON_PATH/g" dist/maybe-not.html > dist/maybe-not.html
#sed -i ":a;N;\$!ba;s/$DEV_LOG_PATH/$LOG_PATH/g" dist/index.html
#cp -r service dist/
#rm dist/service/composer*
#rm -rf dist/service/data/usage/*
#cp -r img dist/
#cp -r vid dist/

 echo Deploy finished!
 echo Done!