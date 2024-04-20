const fetch = require('node-fetch');

const BASE_URL = "https://www.omdbapi.com/";

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const movieUrl = new URL(BASE_URL);
  movieUrl.search = new URLSearchParams({
    s: "My Little Pony",
    apikey: process.env.OMDB_API_KEY,
  }).toString();

  const response = await fetch(movieUrl);
  const data = await response.json();

  data.Search.forEach(movie => {
    const nodeContent = JSON.stringify(movie)

    const nodeMeta = {
      id: createNodeId(`movie-${movie.imdbID}`),
      parent: null,
      children: [],
      internal: {
        type: `Movie`,
        mediaType: `application/json`,
        content: nodeContent,
        contentDigest: createContentDigest(movie)
      }
    }

    const node = Object.assign({}, movie, nodeMeta)
    createNode(node)
  });
}
