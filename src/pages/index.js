import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Movie from "../components/movie"
import "../styles/global.css"

const IndexPage = ({ data }) => {
  return (
    <>
      <header>
        <h1>Bronies Central</h1>
      </header>
      <main>
        <div className="movies">
        {
          data.allMovie.nodes.map(movie => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        }
        </div>
      </main>
      <footer>
        <p>CSCI E-114 Assignment 5 // David Troyer</p>
      </footer>
    </>
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

export const Head = () => <title>Bronies Home Page</title>
