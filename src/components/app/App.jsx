import React, { useEffect, useState } from 'react';

import Movie from '../movie/Movie';

import './app.css';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdd22ead79976a2888bf95992b5b1940&page=1";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=bdd22ead79976a2888bf95992b5b1940&query=";

function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
     fetch(FEATURED_API)
     .then(res => res.json())
     .then(data => {
      //  console.log(data)
       setMovies(data.results);
     });
  }, [])

  console.log(movies)
//   console.log(setMovies)
  return <div className="container">
    {movies.length > 0 && movies.map((movie) => 
    <Movie key={movie.id} {...movie} />
    )}
    </div>;
}

export default App;
//-------------------------------------------------------------------

// import React, { Component } from 'react';

// // import Movie from '../movie/Movie';

// import './app.css';

// export default class App extends Component {   

//     // const [ movies, setMovies ] = useState([]);

// state: {
//     movies: '',
//     setMovies: ''
// }

//     // useEffect(() => {
//     //     fetch(FEATURED_API)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //      //  console.log(data)
//     //       setMovies(data.results);
//     //     });
//     //  }, [])

     

//      async getMovies() {
//         // const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdd22ead79976a2888bf95992b5b1940&page=1";
//         // fetch(FEATURED_API)
//         // .then(res => res.json())
//         // .then(data => this.setState({movies: data}) )
//         const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bdd22ead79976a2888bf95992b5b1940&page=1')
//          let a = await res.json();
//         //  console.log(a)
//          this.setState({
//              movies: a
//          })
//      }

//     render() {
        
//        this.getMovies()
//         console.log(this.state)
        
//         // const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=bdd22ead79976a2888bf95992b5b1940&query=";

//         return (
//             <div className="container">
//                 {/* {movies.length > 0 && movies.map((movie) => 
//                 <Movie key={movie.id} {...movie} />
//                 )} */}
//             </div>
//         )
//     }
// }