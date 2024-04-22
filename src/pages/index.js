import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Movie from "../components/movie"
import "../styles/global.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="movies">
      {
        data.allMovie.nodes.map(movie => (
          <Movie key={movie.imdbID} movie={movie} />
        ))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMovie {
      nodes {
        Poster
        Title
        Year
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage

export const Head = () => <title>Bronies - Home Page</title>
