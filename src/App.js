
import './App.css';
import Search from "./search"
import React,{useState} from "react";
import MovieCards from "./movieCards";

function App() {

  const [input,setInput] = useState("");

  const[moviesArr,setMoviesArr] =useState([])

  function handleChange(value){
    setInput(value)
  }

  function handleSearch(){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e831db350757a0a946ea1adea68593ee&language=en-US&page=1&query=${input}&include_adult=false`)
    .then(response => response.json())
    .then(data => setMoviesArr (data.results))
     
  }


  return (
    <div className="main-content">
      <h1>React Movie Search</h1>
      <Search input={input} handleChange={handleChange} handleSearch={handleSearch}/>
      <MovieCards  moviesArr={moviesArr} input={input}/>
     
    </div>
  );
}

export default App;
