<h1 align="center"> Explore-Amazon-API </h1> <br>
<p align="center">
  <a href="https://explore-amazon-api.herokuapp.com">
    <img alt="logo" title="logo" src="assets/az_logo.png" height="150">
  </a>
</p>

[API URI](https://explore-amazon-api.herokuapp.com/)
<p align="center">
  Explore Amazon gives you access to Amazon product details such as prices, ranks, reviews &amp; offers, etc. in JSON format.
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Feedback](#feedback)
- [Build Process](#build-process)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[![Build Status](https://img.shields.io/travis/gitpoint/git-point.svg?style=flat-square)](https://travis-ci.org/gitpoint/git-point)
[![Coveralls](https://img.shields.io/coveralls/github/gitpoint/git-point.svg?style=flat-square)](https://coveralls.io/github/gitpoint/git-point)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## Features

- Provide Amazon products information for end users
- Code Snippets for API requests
```
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://explore-amazon.p.rapidapi.com/search/EVGA%20graphics%20card',
  params: {api_key: '428371430a6e9fd56dcaa1c622159d86'},
  headers: {
    'X-RapidAPI-Key': 'b323bfac92mshffcee1f8acda31dp13e6f0jsn711dc0b39978',
    'X-RapidAPI-Host': 'explore-amazon.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```
- Records of likes and favorites
- Connect to MongoDb


## Feedback

Feel free to send me feedback on [Any of my Social Media Account](https://github.com/AnthonyZhang220) or [file an issue](https://github.com/AnthonyZhang220/portfolio-website/issues/new). All contributors are always welcome.

If there's anything you'd like to chat about, please feel free to join my discord [Server](https://discord.gg/xkPRmn2HRb)!

## Build Process

- Clone or download the repo
- `npm install` to install dependencies
- `npm run server` to start the packager and run the app on localhost:3000
