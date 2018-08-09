import * as types from './type';
import http from '../../utils/ajax'
import url from '../../apis'

//https://c.y.qq.com
const fetchMainList = (currentPage) =>{
    let params = {}
    params.currentPage = currentPage;
    params.pageSize = 10;
    return http.get('/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1533819213931', params)
}

export const requestData = (value, datatype) => {
    let list = fetchMainList(3);
    return {
        type: types.REQUESTMAINLIST,
        value: list,
        datatype,
    }
}


