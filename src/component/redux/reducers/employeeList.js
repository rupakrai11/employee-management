import React from "react";
import {
  SET_CURRENT,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_DATA,
  ADD_EMPLOYEE,
  SET_EOM,
  GET_EOMDATA,
} from "../actionTypes";

const defaultState = {
  employeeData: [],
  current: null,
  eom:[],
};

const employeeList = (state = defaultState, action) => {
  console.log("this is edata from reducers", action.payload);
//   addEmployee
  switch (action.type) {
    case ADD_EMPLOYEE: {
      return {
        ...state,
        employeeData: [action.payload, ...state.employeeData],
      };
    }
    // getEmployeeData
    case GET_DATA: {
      return {
        ...state,
        employeeData: [action.payload, ...state.employeeData],
      };
    }


    // deleteEmployeeData
    case DELETE_EMPLOYEE: {
      console.log("this is cction da", action.payload);
      return {
        ...state,
        employeeData: state.employeeData.filter(
          (item) => item[1].id !== action.payload
        ),
      };
    }
    // setCurrentEmployeeId
    case SET_CURRENT: {
      console.log("This is current item id", action.payload);
      return {
        ...state,
        current: action.payload,
      };
    }
    // updateEmployeeData
    case UPDATE_EMPLOYEE: {
      console.log("my action payload from reducer",action.payload,state.employeeData[0],'state.employeeData[0]');
      let updatedItem = state.employeeData[0].map((employee) => {
        console.log(employee,'the value of the id in the stateemployeedata\n',state.employeeData,'state.employeeData')
        if (employee.id == action.payload.data.id) {
          console.log('true')
          let value = action.payload.data;
          return value;
        } else {
          return employee;
        }
      });
      console.log("upated item reducer", updatedItem);
      return {
        ...state,
        employeeData: [updatedItem],
        current: null,
      };
    }
    case SET_EOM: {
      state.employeeData[0].map((employee) => {
        console.log(employee.id,"id emploeye",action.payload,"action.payload",'the value of the id in the stateemployeedata\n',state.employeeData,'state.employeeData')
        if (employee.id === action.payload.id) {
          state.eom.push(employee);
          console.log("the value of the ",state.eom)
        }
      });
      return {
        ...state,
      };
    }


    // getEmployeeData
    case GET_EOMDATA: {
      return {
        ...state,
        eom: [action.payload, ...state.eom],
      };
    }





    default:
      return state;
  }
};

export default employeeList;
