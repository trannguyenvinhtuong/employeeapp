import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case type.GET_MANY:
            state.push(action.datamany);            
            return state;
        default:
            return state;
    }
};

export default myReducer;