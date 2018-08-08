'use strict';
import React from 'react';
import { Breadcrumb } from 'element-react';
import Body from '../main/body';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="main">
                <div className="navigation">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>订单</Breadcrumb.Item>
                        <Breadcrumb.Item>订单详情</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="line"></div>
                { <Body /> }
            </div>
        )
    }
}