import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../css/main.css";
import Card from './employee/Card';
import UpdateEmployee from './employee/UpdateEmployee';


const Main = () => {    
  const currentId = useSelector((state) => state.mainReducer.current);
  console.log("currentid",currentId)
  
    

    return (
        <div className='main'>
            
            <UpdateEmployee editId={currentId}/>
            <Card/>
        </div>
    );
};

export default Main;