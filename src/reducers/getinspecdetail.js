import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
            case type.SHOW_INSPEC_DETAIL:          
            return state;
        case type.GET_INSPEC_DETAIL:
            state=action.datainsde;
            return state;
        default:
            return state;
    }
};

export default myReducer;