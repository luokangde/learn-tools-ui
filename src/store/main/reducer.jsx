import * as home from './type';

const initState = {
}

export const main = (state = initState , action = {}) => {
    switch(action.type){
        case home.REQUESTMAINLIST:
            return {
                ...state,
                ...{[action.datatype]: action.value}
            };
        default:
            return {...state};
    }
}

