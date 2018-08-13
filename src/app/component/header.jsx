'use strict';
import React from 'react';
import { Layout, Menu } from 'element-react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menuDefaultActive : "1",
            onSelectSettingActive : "1"
        };
    }

    onSelectMenu(index){
        this.setState({ menuDefaultActive : index  });
    }

    onSelectSetting(index){
        this.setState({ onSelectSettingActive : index  });
    }

    render(){
        return(
            <Layout.Row gutter="20" className="header">
                <Layout.Col span="5" className="header-col">
                    <h1>
                        <img src={require('../../resource/images/logo.svg')} />
                    </h1>
                </Layout.Col>
                <Layout.Col span="14" className="header-col">
                    <Menu defaultActive={this.state.menuDefaultActive} theme="dark" className="nav" mode="horizontal" onSelect={this.onSelectMenu.bind(this)}>
                        <Menu.Item index="1" className="nav-customer" ><NavLink to={"/"} exact style={{textDecoration:'none',display:"block"}}>数据统计</NavLink></Menu.Item>
                        <Menu.SubMenu index="2" title="我的工作台">
                            <Menu.Item index="2-1"><NavLink to={"/courseware"} exact style={{textDecoration:'none',display:"block"}}>本地学习</NavLink></Menu.Item>
                            <Menu.Item index="2-2">网络精品课程</Menu.Item>
                            <Menu.Item index="2-3">选项3</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item index="3" className="nav-customer">订单管理</Menu.Item>
                    </Menu>
                </Layout.Col>
                <Layout.Col span="5" className = "header-col">
                    <Menu defaultActive={this.state.onSelectSettingActive} theme="dark" className="nav float-right" mode="horizontal" onSelect={this.onSelectSetting.bind(this)}>
                        <Menu.Item index="1" className="nav-customer">
                            <i className="el-icon-message"></i>
                        </Menu.Item>
                        <Menu.SubMenu index="2" title="张飞">
                            <Menu.Item index="2-1" style={{minWidth: '80px'}}>基本资料</Menu.Item>
                            <Menu.Item index="2-2" style={{minWidth: '80px'}}>修改密码</Menu.Item>
                            <Menu.Item index="2-3" style={{minWidth: '80px'}}>退出</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Col>
            </Layout.Row>
        )
    }
}

export default Header;