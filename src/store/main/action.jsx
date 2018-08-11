import * as types from './type';
import http from '../../api/ajax'
import URL from '../../api/config'

const fetchMainList = (currentPage) =>{
    let params = {}
    params.currentPage = currentPage;
    params.pageSize = 10;
    const _url_ = new URL("mainList");
    return http.get(_url_.baseURL + _url_.api)
}

//初始化获取数据列表，保存至redux
export const requestData = (value, datatype) => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try {
            let result = await fetchMainList(3);
            result.map(item => {
                return item;
            })
            dispatch({
                type: types.REQUESTMAINLIST,
                value: result,
                datatype
            })
        }catch (error){
            console.error(error)
        }
    }
}


