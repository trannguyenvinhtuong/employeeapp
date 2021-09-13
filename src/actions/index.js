import * as type from './../constants/action_type';
import axios from 'axios';

export const showData = () =>{
    return{
        type: type.SHOW_DATA
    }
}

export const showOne = () =>{
    return{
        type: type.SHOW_ONE
    }
}

export const setData = (data) =>{
    return{
        type: type.SET_DATA,
        data
    }
}

export const getOne = (dataone) =>{
    return{
        type: type.GET_ONE,
        dataone
    }
}

export const getMany = (datamany) =>{
    return{
        type: type.GET_MANY,
        datamany
    }
}

export const getInspec = (datains) =>{
    return{
        type: type.GET_INSPEC,
        datains
    }
}

export const getInspecDetail = (datainsde) =>{
    return{
        type: type.GET_INSPEC_DETAIL,
        datainsde
    }
}


export const requestData = () =>{
    return(dispatch)=>{
        return axios({
            method:'get',
            url:'https://613b2820110e000017a454c7.mockapi.io/employees',
            data:null
        }).then(res =>{
            dispatch(setData(res.data));
        }).catch(err=>{
            console.log(err);
        });
    };
}

export const requestOneData = (id) =>{
    return(dispatch)=>{
        return axios({
            method:'get',
            url:'https://613b2820110e000017a454c7.mockapi.io/employees/' + id,
            data:null
        }).then(res =>{
            dispatch(getOne(res.data));
        }).catch(err=>{
            console.log(err);
        });
    };
}

export const requestManyData = (id) =>{
    return(dispatch)=>{
        return axios({
            method:'get',
            url:'https://613b2820110e000017a454c7.mockapi.io/employees/' + id,
            data:null
        }).then(res =>{        
            dispatch(getMany(res.data));
        }).catch(err=>{
            console.log(err);
        });
    };
}

export const requestInspec = (id) =>{
    return(dispatch)=>{
        return axios({
            method:'get',
            url:'https://613b2820110e000017a454c7.mockapi.io/inspections/' + id,
            data:null
        }).then(res =>{
            dispatch(getInspec(res.data));
        }).catch(err=>{
            console.log(err);
        });
    };
}

export const requestInspecDetail = () =>{
    return(dispatch)=>{
        return axios({
            method:'get',
            url:'https://613b2820110e000017a454c7.mockapi.io/inspectionsdetail/',
            data:null
        }).then(res =>{
            dispatch(getInspecDetail(res.data));
        }).catch(err=>{
            console.log(err);
        });
    };
}

export const onToggleFilter = () =>{
    return{
        type : type.TOGGLE_FILTER
    }
}

export const onCloseFilter = () =>{
    return{
        type : type.CLOSE_FILTER
    }
}

export const onFilter = (filter) =>{
    return{
        type : type.FILTER,
        filter
    }
}

export const toogleCheck = () =>{
    return{
        type: type.TOGGLE_CHECK
    }
}

export const onDeleteE = (deldata) =>{
    return{
        type: type.DELETE_EMPLOYEE,
        deldata
    }
}

export const requestDelete = (id) =>{
    return(dispatch)=>{
        return axios({
            method:'delete',
            url:'https://613b2820110e000017a454c7.mockapi.io/employees/' + id,
            data:null
        }).then(res =>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        });
    };
}