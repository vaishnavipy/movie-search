import React from "react"

function Movie(props){
    const {title,release_date,vote_average,overview,poster_path} =props.movie
    return(
    <div className="movie">
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_face/${poster_path}`} />
         <h2>{title}</h2>
        <p>RELEASE DATE : {release_date}</p>
        <p>RATING : {vote_average}</p>
        <p>{overview}</p>
    </div>)

}

export default Movie;