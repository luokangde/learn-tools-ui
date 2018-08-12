/**
 *
 */
'use strict';
let baseURL;
if(process.env.NODE_ENV === 'development'){
    baseURL = {
        url: '//rap2api.taobao.org/app/mock/25977',
        oosUrl: '//elm.cangdu.org/img'
    }
}else{
    baseURL = {
        url: '//api.cangdu.org',
        oosUrl: '//elm.cangdu.org/img'
    }
}
const api = {
    learnUrl: '/learn/index',
    login: '/sys/login',
    mainList: '/lrean/getList'
}
/**
 * example
 *      new URL('mainList')
 * @param key api
 * @param type
 * @returns {*}
 */
module.exports = (key, type) => {
    if(key && type) {
        return {
            baseURL: baseURL[type],
            api: api[key]
        }
    }else if(key && !type){
        return {
            baseURL: baseURL.url,
            api: api[key]
        }
    }
    return {baseURL: "", api: ""}
};