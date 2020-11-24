import React, { useState } from "react"

function Search(props){

   

    function handleChange(event){

        props.handleChange(event.target.value)

    }

    function handleClick(){
        props.handleSearch();
    }


    return(
    <div className="search-content">
        <span>MOVIE NAME</span>
        <input type="text" value={props.input} onChange={handleChange} placeholder="i.e. Jurassic Park"/>
        <button onClick={handleClick}>Search</button>
    </div>)

}

export default Search;