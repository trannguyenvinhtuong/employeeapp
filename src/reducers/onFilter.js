import * as type from './../constants/action_type';
var initialState = {
    filtername : '',
    filterid : -1,
	filterde: '',
	filterem: ''
};

var myReducer = (state = initialState, action) =>{
	switch (action.type) {
		case type.FILTER:
			state = action.filter;
			return state;	
		default:
			return state;		
	}
	
};

export default myReducer;