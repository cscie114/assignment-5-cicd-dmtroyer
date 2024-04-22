const fetch = require('node-fetch');

const BASE_URL = "https://www.omdbapi.com/";

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const movieUrl = new URL(BASE_URL);
  movieUrl.search = new URLSearchParams({
    s: "My Little Pony",
    apikey: process.env.OMDB_API_KEY,
  }).toString();

  let data;
  try {
    const response = await fetch(movieUrl);
    data = await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    data.Search.forEach(movie => {
      const nodeMeta = {
        id: createNodeId(`movie-${movie.imdbID}`),
        parent: null,
        children: [],
        internal: {
          type: `Movie`,
          mediaType: `application/json`,
          content: JSON.stringify(movie),
          contentDigest: createContentDigest(movie)
        }
      }

      const node = Object.assign({}, movie, nodeMeta)
      createNode(node)
    });
  }
}
