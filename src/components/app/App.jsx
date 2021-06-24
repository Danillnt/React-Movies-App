import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Movie from '../movie/Movie'
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import Search from '../search/Search';

import './app2.css'
import 'antd/dist/antd.css';


export default class App2 extends Component {

    swapiService = new SwapiService();

    constructor() {
        super();
        this.upDateMovie();
    }

    state = {
        data: [],
        dataSearch: []
    }


    //записываем полученные данные (популярные)
   async upDateMovie() {
         const res = await this.swapiService.getMovisPopular()
            .then((res) => {
                this.setState({
                    data: res
                })
            })
            console.log(this)
    }

    //записываем полученные данные в состояние (поисковые) 
     upDateMovieSearch = (text) => {
        const res2 = this.swapiService.getMovisSearch(text)
           .then((res) => {
               this.setState({
                   data: res
               })
            console.log(res)
           })
   }

    render() {

        const { data } = this.state

        return (
            <div className="container">
                <Navigation />
                <Search upDateMovie={this.upDateMovieSearch}/>
                {data.length > 0 && data.map((i) => 
                <Movie key={i.id} {...i} />
                )}
                <Footer />
            </div>        
        )
    }
}