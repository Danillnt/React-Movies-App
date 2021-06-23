// import React, { useEffect, useState } from 'react';

// // import './search.css';

// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=bdd22ead79976a2888bf95992b5b1940&query=";

// function Search() {

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleOnSubmit = (e) => {
//     e.preventDefault()

//     fetch(SEARCH_API+searchTerm)
//     .then(res => res.json())
//     .then(data => {
//      //  console.log(data)
//       setMovies(data.results);
//     });
//    }

//    const hendleOnChange = (e) => {
//     setSearchTerm(e.target.value)
//    }

//   return (
//         <div className="movie-search">
//                 <form onSubmit={handleOnSubmit}>
//                     <input className="movie-search__input" 
//                     placeholder="Tupe to search..." 
//                     type="search"
//                     value={searchTerm}
//                     onChange={hendleOnChange}
//                     />
//                 </form>
//          </div> 
//   )
// }

// export default App;