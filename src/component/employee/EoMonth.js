import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import employeeImg from "../../assets/images/employee.png";
import "../../css/card.css";
import { addEom, addEomonth, deleteEmployee, getEmployeeData, getEoMonth, setCurrent, setEmployee, setEmployeeoMdata, setEom } from "../redux/actions";

const Eom = () => {
  const Data = useSelector((state) => state.mainReducer.eom);
  console.log("this is EOm",Data);
  const[loading,setloading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(getEoMonth())
  },[setEmployeeoMdata])

  
  
// const addEomofMonth=(data=>{
// dispatch(addEomonth(data))
// }
// const addOfEomonth=(name)=>{
//  dispatch(addEomonth(name))
//  console.log()

// }

  const deleteEmp = (id) => {
     dispatch(deleteEmployee(id));
    console.log("delete btn", id);
    window.location.reload(false);
  };
// if(Data[0]===[]){
// setloading(false);
// }
  return (
    <>
    <div className="container">
    {Data[0]?.map((data)=>(
<div className="card-wrapper">
  <div className="eom">
    <button className="view-more">View More</button>
  </div>
  <div className="card-img">
    <img src={data.image} alt="employee-img"></img>
  </div>
  <div className="name">
    <h2>{data.name}</h2>
    <span className="post">{data.position}</span>
  </div>
  <div className="detail">
    <ul>
      <li>Address:{data.address}</li>
      <li>Register Date:{data.rdate}</li>
      <li>Phone Number:{data.phone}</li>
      <li>Email:{data.email}</li>

    </ul>
    <div className="action-btn">
      <button className="edit-btn">Remove From Eom</button>
    </div>
  </div>
</div>
    )
  
    )}
    </div>:""

  
    </>
  );
};

export default Eom;
