import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
            case type.SHOW_DATA:          
            return state;
        case type.SET_DATA:
            state=action.data;
            return [...state];
        default:
            return state;
    }
};

export default myReducer;