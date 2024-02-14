# Depictr

## What it's for

Depictr is a toy for visualising snippets of text, eg: songs or poems. You type some words into a box and a mosaic of vaguely relevant photos appears.

<!-- https://depictr.netlify.app/ -->

[Video demo](https://www.useloom.com/share/fe565eddb4f047f09bdc85422a7af2a3)

## History

I developed Depictr (alpha) back in 2006. At that time it used the Yahoo Terms Extraction service to find words and phrases, 
and used these as tags to find related photos via the Flickr API. it won Editor's Pick once on Programmable Web at the time :-)

I rewrote it using React and Redux in about 2018 as a learning exercise and switched to the Cortical Retina API to detect phrases.

Retina API is no longer available for free and I haven't integrated anything else yet, so the text is just tokenised and each token searched as a separate tag.

I use this project to experiment with things. I added recently added drag drop, and a facility to change the mosaic size.
## Structure of the app

This project uses React for the front end and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The React source is in the /src folder. It uses Redux for state management.

The back end serves mainly as a proxy for the other services and is now integrated into the same code base. It comprises serverless functions in the functions folder. The site is deployed on Netlify, which deploys the front end site to its CDN and the functions to AWS.

To develop locally:

Clone the repo

`nvm use` (sets node version appropriately - to 16.15.0 as per .nvmrc)

`npm install`

`npm install netlify-cli -g` (installs the netlify CLI)

`netlify dev`





