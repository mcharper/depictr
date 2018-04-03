# Depictr

## What it's for

Depictr is a creative toy for visualising song lyrics. You type some words into a box and a mosaic of vaguely relevant photos appears.

[Demo](https://mcharper.github.io/depictr/)

## I've seen it before

I developed Depictr (alpha) back in 2006. It used the Yahoo Terms Extraction service to find words and phrases, 
and used these as tags to find related photos via the Flickr API. it won Editor's Pick once on Programmable Web :-)

![Depictr (alpha) Snapshot](http://github.com/mcharper/depictr/src/images/DepictrSnapshot.gif "Depictr (alpha) Snapshot")

I decided to rewrite it using React and Redux as a learning exercise.

## Structure of the app

This project uses React for the front end and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The React source is in the /src folder.
