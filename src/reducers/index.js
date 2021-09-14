import { combineReducers } from "redux";
import showData from './showdata';
import getOne from './getonedata';
import getInspec from './getinspec';
import getInspecDetail from './getinspecdetail';
import onToggleFilter from './onToggleFilter';
import onFilter from './onFilter';
import toogleCheck from './tooglecheck';
import onDeleteE from './onDeleteE';
import getMany from './getmany';
import onDeSelect from "./onDeSelect";

const myReducer = combineReducers({
    showData,
    getOne,
    getInspec,
    getInspecDetail,
    onToggleFilter,
    onFilter,
    toogleCheck,
    onDeleteE,
    getMany,
    onDeSelect
});

export default myReducer;