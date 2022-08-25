import React, { Component } from 'react';
import moment from 'moment';




export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h1>Added from portfolio-container.js</h1>
                <h2>Portfolio items go here...</h2>
                <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
        );
    }
}