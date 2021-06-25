import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Movie from '../movie/Movie'
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import Search from '../search/Search';
import Spiner from '../spiner/Spiner';
import ErrorIndicator from '../error-indicator/error-indicator'

import './app.css'
import 'antd/dist/antd.css';


export default class App extends Component {

    swapiService = new SwapiService();

    constructor() {
        super();
        setTimeout(this.upDateMovie, 1000); //Задержка спинера
    };

    state = {
        data: [],
        loading: true, //спинер
        error: false
    };

    //Меняем состояние ошибки(если данные с сервера не получены)
    onError = (err) => {
        this.setState({
            // loading: true,
            error: true
        })
    };

    //записываем полученные данные (популярные)
   upDateMovie = () => {
         this.swapiService.getMovisPopular()
            .then((res) => {
                this.setState({
                    data: res,
                    loading: false
                })
            })
            .catch(this.onError)
    };

    //записываем полученные данные в состояние (поисковые) 
     upDateMovieSearch = (text) => {
        this.setState({
            loading: true
           })

        this.swapiService.getMovisSearch(text)
           .then((res) => {
               this.setState({
                   data: res,
                   loading: false
               })
           })
           .catch(this.onError()) 
   };

    render() {

        const { data, loading, error} = this.state
        // console.log(error)

        //Проверка состояния загрузки
        if (loading && !error) {
            return (
                <div className="spiner">
                    <Spiner />
                </div>
            )
        }

        //Проверка состояния ошибки
        if (error) {
            return (
                <div>
                    <ErrorIndicator />
                </div>
            )
        }

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

