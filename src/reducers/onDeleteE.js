import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.DELETE_EMPLOYEE:
            state.push(action.deldata);                       
            return [...state];
        case type.CLEAR_DEL:
            state = [];
            return state;
        default:
            return state;
    }
};

export default myReducer;