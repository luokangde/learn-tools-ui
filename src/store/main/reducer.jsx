import * as home from './type';

export const main = (state = {} , action = {}) => {
    switch(action.type){
        case home.REQUESTDATA:
            return {...state, ...{[action.datatype]: action.value}};
        default:
            return state;
    }
}

