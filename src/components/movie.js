import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../styles/movie.module.css"

const Movie = ({ movie }) => {
  return (
    <div className={ styles.container }>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
}

export default Movie
