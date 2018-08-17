/**
 *
 */
'use strict';

let baseURL;
if(process.env.NODE_ENV === 'development'){
    baseURL = '//rap2api.taobao.org/app/mock/25977'
}else{
    baseURL = '//rap2api.taobao.org/app/mock/25977'
}

const generateUrl = (baseUrl) => {
    return{
        learnUrl: baseUrl + '/learn/index',
        login: baseUrl + '/sys/login',
        mainList: baseUrl + '/lrean/getList'
    }
}


/**
 * environment config
 * @type {{url: {learnUrl, login, mainList}}}
 */
export const environment = {
    url: generateUrl(baseURL),
}