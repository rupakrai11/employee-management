import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "../../css/form.css";
import { setUpdateData } from "../redux/actions";

const UpdateEmployee = ({ editId }) => {
  // useEffect(()=>{
  //   dispatch(addEmployeeData())
  //     },[])
  const [currentId, setCurrentId] = useState(editId);
  const Data = useSelector((state) => state.mainReducer.employeeData[0]);
  //   const currentId = useSelector((state) => state.mainReducer.current);
  console.log("currentid from update component", currentId);
  console.log("data", Data);

  const [currentData, setCurrentData] = useState({
    name: "",
    position: "",
    address: "",
    image: "",
    rdate: "",
  });

  useEffect(() => {
    if (editId && Data) {
      getCurrentItem();
      setCurrentId(editId);
    }
  }, [editId]);

  const getCurrentItem = () => {
    if (Data !== null) {
      let getData = Data.filter((item) => item.id === editId).map(
        (filteritem) => filteritem
      );
      setCurrentData(getData[0]);
    }
  };
  console.log("Current item", currentData);

  useEffect(() => {
    if (currentData.name !== "") {
      setEdata(currentData);
      setCurrentId(editId);
    }
  }, [currentData]);

  const dispatch = useDispatch();
  const [edata, setEdata] = useState({
    name: "",
    position: "",
    address: "",
    image: "",
    rdate: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    // console.log(e.target,e.target.name)
    setEdata({ ...edata, [e.target.name]: e.target.value });
  };

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     let imageUrl = URL.createObjectURL(img);
  //     console.log(typeof imageUrl);
  //     setEdata({
  //       ...edata,
  //       image: imageUrl,
  //     });
  //   }
  // };
  const updateEmp = () => {
    dispatch(setUpdateData(currentId, { edata }));
    //  setCurrentId(null);
    window.location.reload(false);

  };
  const cancelAction=()=>{
    setCurrentId(null);
    window.location.reload(false);
  }
  console.log("currentid from update component", currentId);


  const [selectedImg, setselectedImg] = useState("");

  const handleUplod = () => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("file",selectedImg);
    formData.append("upload_preset","biewrrgc");
    alert("The image is uploading. Please wait.");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/aunep/image/upload",
        formData)
      .then((res) => {
         console.log("The res from cloudinary", res);

      setEdata({
        ...edata,image:res.data.url
      }) 

        // uploadSuccess(true);
      })
      .catch((error) => {
        console.log("The error from the cloudinary", error);
      });
  };
  return (
    <>
  {currentId!==null?
    <div className="form-container edit-form">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-wrapper">
          <div className="input-field">
          <label htmlFor="name">Name:</label>
          <input
          required="true"

          id="name"
            type="text"
            className="to-input"
            placeholder="Enter Employee Name"
            value={edata.name}
            onChange={onChange}
            name="name"
          />
          </div>
          <div className="input-field">
          <label htmlFor="name">Position:</label>

          <textarea
          required="true"

            type="text"
            className="to-input mt"
            placeholder="Employee Position"
            value={edata.position}
            onChange={onChange}
            name="position"
          />
          </div>
          <div className="input-field">
          <label htmlFor="name">Address:</label>
          <input
          required="true"

            type="text"
            className="to-input mt"
            placeholder="Employee Address"
            value={edata.address}
            onChange={onChange}
            name="address"
          />
          </div>
          <div className="input-field">
          <label htmlFor="name">Resitration Date:</label>
          <input
          required="true"

            type="date"
            className="to-input mt"
            placeholder="Register Date"
            value={edata.rdate}
            onChange={onChange}
            name="rdate"
          />
          </div>

          <div className="input-field">
          <label htmlFor="name">Phone Number:</label>
          <input
          required="true"

            type="text"
            className="to-input mt"
            placeholder="Register Date"
            value={edata.phone}
            onChange={onChange}
            name="phone"
          />
          </div>


          <div className="input-field">
          <label htmlFor="name">Email:</label>
          <input
          required="true"
            type="email"
            className="to-input mt"
            placeholder="Register Date"
            value={edata.email}
            onChange={onChange}
            name="email"
          />
          </div>
          <div className="input-field">
            <label htmlFor="name">Employee Image</label>

            <input
              type="file"
              className="to-input mt"
              placeholder="Employee Address"
              onChange={(e)=>{setselectedImg(e.target.files[0])}}
              name="image"
            />
            {edata.image!==""?
            <div className="uploaded-img">
            <img src={edata.image} alt='No Image'/>
            </div>:""
}
            <button onClick={handleUplod}>Upload Image</button>
          </div>
<div className="update-action-btn">
          <button className="add-item" onClick={updateEmp}>
            Update Employee
          </button>
          <button className="cancel-item" onClick={cancelAction}>Cancel</button>
        </div>
        </div>
      </form>
    </div>:""
  }
    </>

  );
};

export default UpdateEmployee;
