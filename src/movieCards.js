import React from "react";
import Movie from "./movie";

function MovieCards(props){
      
        const cards = props.moviesArr.map(movie => <Movie movie={movie}/>)

        return(
        <div className="movies-container">
            
            {props.moviesArr.length == 0 && props.input != "" ? "Sorry No Match Found..." : cards}

            
        </div>)
}
export default MovieCards