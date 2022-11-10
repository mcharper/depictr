# Depictr

## What it's for

Depictr is a creative toy for visualising song lyrics. You type some words into a box and a mosaic of vaguely relevant photos appears.

[Video demo](https://www.useloom.com/share/fe565eddb4f047f09bdc85422a7af2a3)

## I've seen it before

I developed Depictr (alpha) back in 2006. It used the Yahoo Terms Extraction service to find words and phrases, 
and used these as tags to find related photos via the Flickr API. it won Editor's Pick once on Programmable Web :-)

I decided to rewrite it using React and Redux as a learning exercise.

## Structure of the app

This project uses React for the front end and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The React source is in the /src folder.

The app uses a React front end with Redux for state management.

The back end is a separate app. It acts as a proxy for other services.

The app uses two external services:
- cortical retina API to analyse the text and extract keywords
- flickr API to retrieve photos tagged with those keywords
