import * as types from './type';
import http from '../../utils/ajax'
import URL from '../../config'

const fetchMainList = (currentPage) =>{
    let params = {}
    params.currentPage = currentPage;
    params.pageSize = 10;
    const _url_ = new URL("mainUrl");
    return http.get(_url_.baseURL + _url_.api)
}

export const requestData = (value, datatype) => {
    let list = fetchMainList(3);
    return {
        type: types.REQUESTMAINLIST,
        value: list,
        datatype,
    }
}


