'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import { requestData } from '../../store/main/action'
import Header from '../component/header';
import Navigation from '../component/navigation'
import Body from './body';

class Index extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    componentDidMount(){
        //set cookie
        const { cookies } = this.props;
        cookies.set('uid', '111111111', {
            path: '/'
        });
        this.props.requestData("1", "dataList");
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props)
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

export default withCookies(connect(state => ({
    mainData: state.mainData,
}), {
    requestData
})(Index));