#!/bin/bash
source .env

# cleanup
rm -rf dist/*
sleep 1

# create and minify the css
NODE_ENV=$APP_ENV npx tailwindcss --no-autoprefixer -o ./dist/tailwind.css --minify

# create doomsday clock json
node clock.mjs && echo 'Build finished!' && sleep 1 && exit 0

exit 1