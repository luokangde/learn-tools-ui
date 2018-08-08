'use strict';
import React from 'react';
import Header from '../common/header';
import Main from '../common/body'

export  default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}