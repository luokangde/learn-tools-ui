/**
 *
 */
'use strict';
let baseURL;
let fileServerUrl = '//elm.cangdu.org/img';
if(process.env.NODE_ENV === 'development'){
    // baseURL = '//172.20.10.12:8080';
}else{
    baseURL = '//api.cangdu.org';
}
const api = {
    learnUrl: '/learn/index',
    login: '/sys/login',
    mainList: '/main/getList'
}

module.exports = (key, type) => {
    // 开发模式下使用proxy 阿里巴巴RAP数据
    if(process.env.NODE_ENV === 'development'){
        return {
            baseURL: "",
            api: api[key]
        }
    }

    if(key && type == "fileServerUrl"){
        return {
            baseURL: fileServerUrl,
            api: api[key]
        }
    }else if(key && !type){
        return {
            baseURL: baseURL,
            api: api[key]
        }
    }
    return {baseURL: "", api: ""};
};