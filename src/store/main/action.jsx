import * as types from './type';
import http from '../../utils/ajax'
import url from '../../apis'

const fetchMainList = (currentPage) =>{
    let params = {}
    params.currentPage = currentPage;
    params.pageSize = 10;
    return http.get(url.mainUrl, params)
}

export const requestData = (value, datatype) => {
    return {
        type: types.REQUESTDATA,
        value,
        datatype,
    }
}


