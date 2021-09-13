import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
            case type.SHOW_INSPEC:          
            return state;
        case type.GET_INSPEC:
            state=action.datains;
            return state;
        default:
            return state;
    }
};

export default myReducer;