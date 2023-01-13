import React, { useState, useEffect } from "react";
import Students from "./Jsondata";
import { Link } from "react-router-dom";

function Create() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [std, setStd] = useState("");
  const [gender, setGender] = useState("");
  const [mobileLength, setMobileLength] = useState(false);

  const handleSubmit = () => {
   if(mobNo.length > 0 && mobNo.length < 10 || mobNo.length > 10){
     setMobileLength(true);
   }
    else{
    
    let newStudents = {};
    newStudents.id = id;
    newStudents.name = name;
    newStudents.mobile = mobNo;
    newStudents.class = std;
    newStudents.gender = gender;

    Students.push(newStudents);

    setId("");
    setName("");
    setStd("");
    setmobNo("");
    setGender("");
   }
  };

  useEffect(()=>{
  setMobileLength(false)   
  },[mobNo]);
 
  let arrValues = Students.map((element) => {
    return element.id;
  });
  let existId = arrValues.includes(id);

   let numArr = Students.map((element)=>{
    return element.mobile.toString();
   });

  //  console.log(numArr);
   
   let existMob = numArr.includes(mobNo);
  //  console.log(existMob);
  //includes method assign boolean property i.e true/false
  const disabledBtn = id.length==0 || name.length==0 || mobNo.length==0
  ||std.length==0 || gender.length==0
  return (
    <div>
      <div>
      <h1>Registration Form </h1>
        <form action="">
          <div className="value">
            <label htmlFor="">Students Id :</label>
            <input
              onChange={(e) => setId(e.target.value)}
              type="text"
              name="id"
              id=""
              placeholder="enter your name"
              value={id}
              required
            />
            <span>{existId ? "this id is already exist" : ""}</span>
          </div>
          <div className="value">
            <label htmlFor="">Students Name :</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id=""
              placeholder="enter your name"
              value={name}
              required
            />
            
          </div>
          <div className="value">
            <label htmlFor=""> Mobile No. :</label>
            <input
              onChange={(e) => setmobNo(e.target.value)}
              type="number"
              name="mobile"
              id=""
              placeholder="enter your no."
              value={mobNo}
              required
            />
            <span>{existMob ? "this number is already exist" : ""}</span>
            <span>{mobileLength ? "this number is not valid" : ""}</span>
          </div>
          <div className="value">
            <label htmlFor="">Class :</label>
            <input
              onChange={(e) => setStd(e.target.value)}
              type="text"
              name="class"
              id=""
              placeholder="enter your class"
              value={std}
              required
            />
          </div>
          <div className="value">
            <label htmlFor="">Gender :</label>
            <input
              onChange={(e) => setGender(e.target.value)}
              type="text"
              name="gender"
              id=""
              placeholder="enter your gender"
              value={gender}
              required
            />
          </div>
          <Link>
            <button 
            disabled={disabledBtn}
            onClick={handleSubmit} type="submit">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
