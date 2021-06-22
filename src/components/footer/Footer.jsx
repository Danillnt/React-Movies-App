import React, { Component } from 'react';

import { Pagination } from 'antd';

import './footer.css';

export default class Footer extends Component {

    render() {

        
        return (   
            <div className="infoCard__footer">
                <Pagination defaultCurrent={1} total={50} />   
            </div> 
        )
    }
}