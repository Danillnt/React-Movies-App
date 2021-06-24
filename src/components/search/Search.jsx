import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './search.css';


export default class Search extends Component {

    swapiService = new SwapiService();

    state = {
        text: " "
    }

    //upDateMovie

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.props.upDateMovie(this.state.text);
        this.setState({
            text: ""
        });
    }

    //записываем в состояние текст инпута
    hendleOnChange = (e) => {
        this.setState({
           text: e.target.value
        });
    }


    render() {

        const { text } = this.state
      
        return (
            <div className="movie-search">
                {/* <div>{text}</div> */}
                <form onSubmit={this.handleOnSubmit}>
                    <input className="movie-search__input" 
                    placeholder="Tupe to search..." 
                    type="search"
                    // value={searchTerm}
                    onChange={this.hendleOnChange}
                    />
                </form>
            </div>       
        )
    }
}

