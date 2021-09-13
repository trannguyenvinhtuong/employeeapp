import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case type.SHOW_ONE:          
            return state;
        case type.GET_ONE:
            state=action.dataone;
            return state;
        default:
            return state;
    }
};

export default myReducer;