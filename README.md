# Bronies Central

David Troyer's submission for CSCI E-114 Assignment 5

https://bronies.netlify.app

## Configuration

You must create a `.env` file in the top level of this directory with a valid API key for the [OMDb API](https://www.omdbapi.com) named `OMDB_API_KEY`. For example:

```properties
OMDB_API_KEY=1234abcd
```

## Run

This is a standard [Gatsby](https://www.gatsbyjs.com) project deployed using [Netlify](https://netlify.com).

1. Run `npm install` to install dependencies.
2. Run `npm run develop` to start a development server.

## Github Action

There is a github action that runs a linter, runs a jest unit test, and deploys to netlify.

## Serverless Function

The web app has a serverless function to retrieve data for a random pony. This can be seen by going to `/which-pony-am-i` or clicking on the "Which pony am I?" link in the navigation bar.
