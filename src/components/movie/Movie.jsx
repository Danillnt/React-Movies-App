import React, { Component } from 'react';

import './movie.css';

export default class Movie extends Component {


    //Сокращаем текст
    truncateText = (text) => {
        let counter = text.split(" ")
        if (counter.length > 60) { 
            let del = counter.length - 40
            let res = counter.splice(0, del).join(" ")+"..."
            return res
        } else {
            return text
        }
      }
   

    render() {
        const IMG_API = "https://image.tmdb.org/t/p/w1280";
 
        let {original_title, poster_path, release_date, vote_average, overview} = this.props;
        
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
                         <span >{release_date}</span> 
                    </div>  
                    <div className="infoCard__genre">
                        <div className="infoCard__genre_team-el">Action</div>
                        <div className="infoCard__genre_team-el">Drama</div>
                    </div>
                    <div infoCard__text>
                         <span className="infoCard__text_infoMovie">{this.truncateText(overview)}</span>
                    </div>
                    <div className="infoCard__star">

                    </div>                             
                </div>    
            </div>        
        )
    }
}