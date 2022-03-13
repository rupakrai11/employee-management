import {combineReducers} from "redux";
import employeeList from "./employeeList";

export default combineReducers( {
    mainReducer: employeeList
});