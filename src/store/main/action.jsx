import * as home from './type';

export const requestData = (value, datatype) => {
    return {
        type: home.REQUESTDATA,
        value,
        datatype,
    }
}


