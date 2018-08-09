'use strict';
import React from 'react';
import Header from '../component/header';
import Navigation from '../component/navigation'
import Body from './body';

export  default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="main">
                <Header />
                <Navigation />
                <div className="line"></div>
                <Body />
            </div>
        )
    }
}