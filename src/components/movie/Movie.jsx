import React, { Component } from 'react';

import { Rate } from 'antd';

import { format } from 'date-fns'

import './movie.css';

export default class Movie extends Component {

    //Сокращаем текст
    truncateText = (text) => {
        let arr = text.split(" ")

        let newArr = arr.filter((i, item) => {
            if (item < 40) {
                return i
            }
        })
        let res = newArr.join(" ")+"..."
        return res
      }

    state: {
        data: ""
    }  
   

    render() {

        
        
        const IMG_API = "https://image.tmdb.org/t/p/w1280";

        let {original_title, poster_path, release_date, vote_average, overview} = this.props;

        
        
      
        // console.log(format(new Date(release_date), 'LLLL d, y'))

        return (
            <div className="movie-item">
                <div className="imageCard">
                    <img src={IMG_API + poster_path} alt={original_title} className="imageCard__img"></img> 
                </div>

                <div className="infoCard">
                    <div className="infoCard__header">
                        <span className="infoCard__header_team-title">{original_title}</span> 
                        <span className="infoCard__header_team-rate">{vote_average}</span> 
                    </div>         
                    <div className="infoCard__date">
                         <span >{format(new Date(), 'LLLL d, y')}</span> 
                    </div>  
                    <div className="infoCard__genre">
                        <div className="infoCard__genre_team-el">Action</div>
                        <div className="infoCard__genre_team-el">Drama</div>
                    </div>
                    <div className="infoCard__text">
                         <span className="infoCard__text_infoMovie">{this.truncateText(overview)}</span>
                    </div>
                    <div className="infoCard__star">
                        <span>
                            <Rate />
                        </span>
                    </div>                             
                </div>    
            </div>        
        )
    }
}