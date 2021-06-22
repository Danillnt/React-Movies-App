import React, { Component } from 'react';

import './search.css';

export default class Search extends Component {

   

    render() {

        
        return (
            <div className="movie-search">
                <form>
                    <input className="movie-search__input" placeholder="Tupe to search..."></input>
                </form>
            </div>        
        )
    }
}