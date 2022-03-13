import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../../css/form.css";
import { addEmployeeData, setEmployeeData } from "../redux/actions";
import { Link, useHistory, useNavigate } from "react-router-dom";
const AddEmployee = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [edata, setEdata] = useState({
    name: "",
    position: "",
    address: "",
    image: "",
    rdate: "",
    eom:null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addEmp = () => {
    console.log("the e", edata);
    if (
      (edata.name === "") &
      (edata.position === "") &
      (edata.rdate === "") &
      (edata.address === "")
    ) {
      alert("please fill the form");
    } else {
      dispatch(setEmployeeData(edata));
      setEdata({
        name: "",
        position: "",
        address: "",
        rdate: "",
        address: "",
        image: "",
        eom:"",
        email:"",
        phone:"",

      });
      // navigate("/");
    }
  };

  const onChange = (e) => {
    // console.log(e.target,e.target.name)
    setEdata({ ...edata, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let imageUrl = URL.createObjectURL(img);
      console.log(typeof imageUrl);
      setEdata({
        ...edata,
        image: imageUrl,
      });
    }
  };

  const [selectedImg, setselectedImg] = useState("");
  const [imgUrl, setImgUrl] = useState(null);

  // const [imgeUrl,setImgUrl]=useState("");
  // console.log("The image url", imgUrl);
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
  console.log("selected image",selectedImg)

  return (
    <>

    <div className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      
         <div className="form-wrapper">
         <div>
        <Link to="/"><h6 className="view-emp">View Employee</h6></Link>

        </div>
          <div className="input-field">
            <label htmlFor="name">Name:</label>
            <input
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
              type="address"
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
              placeholder="Phone Number"
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
              placeholder="Enter Your Email"
              value={edata.email}
              onChange={onChange}
              name="email"
            />
          </div> 

          <div className="input-field">
            <label htmlFor="name">Employee Image:</label>

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

           <button className="add-item" onClick={addEmp}>
            Add Employee
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddEmployee;
