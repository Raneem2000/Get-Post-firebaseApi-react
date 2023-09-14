import React from 'react'
import Movies from './Movies'

function MoviesList(props) {
  return (
    <ul>
        {props.movies.map((movie) => (
            <Movies
            title = {movie.title}
            openingText = {movie.openingText}
            releaseData = {movie.releaseData}
            />
        ))}
    </ul>
  )
}

export default MoviesList