import * as type from './../constants/action_type';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.DE_SELECT:
            state = [];
            return state;
        case type.GET_SELECT:            
            return state;
        default:
            return state;
    }
};

export default myReducer;