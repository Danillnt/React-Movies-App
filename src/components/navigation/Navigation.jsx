import React, { Component } from 'react';

import './navigation.css';

import { Button } from 'antd';
// import 'antd/dist/antd.css';
// import '../../../node_modules/antd/dist/antd.css';

export default class Navigation extends Component {

   

    render() {

        
        return (
            <div className="movie-navigation">
                <Button className="movie-navigation__btnSearch btn">Search</Button>
                <Button className="movie-navigation__btnRated btn">Rated</Button>
            </div>        
        )
    }
}