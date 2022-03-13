import axios from "axios";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_DATA, GET_EOMDATA, SET_CURRENT, SET_EOM, UPDATE_EMPLOYEE } from './actionTypes';


const URL="http://localhost:3000/employeeData";



export const getEmployeeData =() => {
  return async function(dispatch){
  try{
       const data = await axios.get("http://localhost:3000/employeeData");
       console.log("This is res",data.data);
       const edata =  data.data;
       console.log("edatta",edata)
    dispatch(setEmployee(edata));
}
     catch(err){
       console.log('error',err)
     }
   
  };
}




// setEmployeData in local state
  export const setEmployee = ( edata= null) => {
    if (edata) {
      return {
        type: GET_DATA,
        payload: edata,
      };
    }else{

      return {
        type: GET_DATA,
        payload: [],
      };
    }
  
  };



  export const deleteEmployee=async(id)=>{
      try{
           const data = await axios.delete(`http://localhost:3000/employeeData/${id}`);
           console.log("This is delete item",data.data);
           const edata =  data.data;
           console.log("edatta",edata)
        return{
          type:DELETE_EMPLOYEE,
          payload:id
        }
      }
         catch(err){
           console.log('error',err)
         }
       
      };




      export const setEmployeeData=(edata)=> {
        let data1=edata;
        return async function(dispatch){
        try{
             const data = await axios.post("http://localhost:3000/employeeData",data1);
             console.log("This is res",data);
             const edata =  data.data;
             console.log("edatta",edata)
          dispatch(addEmployeeData(edata));
      }
           catch(err){
             console.log('error',err)
           }
         
        };
      }
      // addEmployeeData

      export const addEmployeeData = (edata) => {
        if (edata) {
          return {
            type: ADD_EMPLOYEE,
            payload: edata,
          };
        }else{
    
          return {
            type: ADD_EMPLOYEE,
            payload: [],
          };
        }
      
      };
    // setCurrent item
export const setCurrent=id=>{
  console.log(id)
  return{
      type:SET_CURRENT,
      payload:id
  }
}


export const setUpdateData=(currentId,currentData)=> {
  let updateid=currentId;
  let updatedIem=currentData;
  console.log("this is is updataed id fom action",updateid);
  console.log("this is is updataed item fom action",updatedIem);
       const geTurl = `http://localhost:3000/employeeData/${updateid}`;
  return async function(dispatch){
  try{
       const getcurrId = await axios.put(geTurl,updatedIem.edata);
       console.log("This is res",getcurrId.res);
      //  const edata =  data.data;
       console.log("edatta",getcurrId)
    dispatch(updateEmployee(geTurl,{...updatedIem.edata}));
}
     catch(err){
       console.log('error',err)
     }
   
  };
}



// updateEmployee
export const updateEmployee=(getcurrId,data)=>{
  return{
type:UPDATE_EMPLOYEE,
payload:{id:getcurrId,data}
  }
}

// set Eom
// export const setEom=(data) => {
//   let updateid=data.id;
//   let eomItem=data;
//   return(dispatch){
//     console.log("this is is eom id fom action",updateid);
//     console.log("this is is eom item fom action",eomItem);
//         //  const edata =  data.data;
//       console.log("edatta",getcurrId)
//       dispatch(addEom(updateid,{...eomItem.edata}));
//   }

//   };



export const setEomeData=(data)=> {
  let data1=data;
  console.log("this is e data",data1);
  return async function(dispatch){
  try{
       const data = await axios.post("http://localhost:3000/eomdata",data1);
       console.log("This is res",data);
       const edata =  data.data;
       console.log("edatta",edata)
    dispatch(addEomonth(edata));
}
     catch(err){
       console.log('error',err)
     }
   
  };
}


 export const getEoMonth=()=>{
  return async function(dispatch){
    try{
         const data = await axios.get("http://localhost:3000/eomdata");
         console.log("This is res",data.data);
         const edata =  data.data;
         console.log("edatta",edata)
      dispatch(setEmployeeoMdata(edata));
  }
       catch(err){
         console.log('error',err)
       }
     
    };
}

// setEmployeData in local state
export const setEmployeeoMdata = ( edata= null) => {
  if (edata) {
    return {
      type: GET_EOMDATA,
      payload: edata,
    };
  }else{

    return {
      type: GET_EOMDATA,
      payload: [],
    };
  }

};

// set Eom



// Add eom
export const addEomonth=data=>{
  console.log("EOM ID",data)
  return{
    type:SET_EOM,
    payload:data
  }
}
