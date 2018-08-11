/**
 *
 */
'use strict';
let baseURL;
let fileServerUrl = '//elm.cangdu.org/img';
if(process.env.NODE_ENV === 'development'){
    baseURL = '//172.20.10.12:8080';
}else{
    baseURL = '//api.cangdu.org';
}
const api = {
    learnUrl: '/learn/index',
    mainUrl: '/sys/login'
}

module.exports = (key, type) => {
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