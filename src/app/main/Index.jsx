'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as mainCreators from '../../store/main/action'
import Header from '../component/header';
import Navigation from '../component/navigation'
import Body from './body';


class Index extends React.Component {
    static propTypes = {
        
    }

    componentDidMount(){
        this.props.mainActions.requestData("1", "list")
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

//关联状态机
const mapStateToProps = (state) => {
    const { main } = state
    return {
        main
    }
}

const mapDispatchToProps = (dispatch) => {
    const mainActions = bindActionCreators(mainCreators, dispatch)
    return {
        mainActions
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
