import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import employeeImg from "../../assets/images/employee.png";
import "../../css/card.css";
import { addEom, addEomonth, deleteEmployee, getEmployeeData, setCurrent, setEmployee, setEom, setEomeData } from "../redux/actions";

const Card = () => {
  const Data = useSelector((state) => state.mainReducer.employeeData);
  const EOM=useSelector((state)=>state.mainReducer.eom)
  console.log("this is data from card employeee",EOM);




  const[loading,setloading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(getEmployeeData())
  },[setEmployee])

  
  
// const addEomofMonth=(data=>{
// dispatch(addEomonth(data))
// }
// const addOfEomonth=(name)=>{
//  dispatch(addEomonth(name))
//  console.log()

// }

  const deleteEmp = (id) => {
    alert("Are sure want to delete")
    window.location.reload(false);
     dispatch(deleteEmployee(id));
    console.log("delete btn", id);
  };

  return (
    <>
    <div className="container">
    {Data[0]?.map((data)=>(
<div className="card-wrapper">
  <div className="eom">
    {/* <Link to="/eom" className="view-more">View Eom</Link> */}
 <button className="add-eom" onClick={()=>dispatch(setEomeData(data))}>Add Eom</button> 

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
      <button className="edit-btn" onClick={() => dispatch(setCurrent(data.id))}>Edit</button>
      <button className="delete-btn" onClick={(e)=>{deleteEmp(data.id);
    e.preventDefault();

      }
      }>Delete</button>
    </div>
  </div>
</div>
    )
  
    )}
    </div>:""

  
    </>
  );
};

export default Card;
