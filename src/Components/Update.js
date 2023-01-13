import React, { useState, useEffect } from "react";
import Students from "./Jsondata";
import { Link } from "react-router-dom";

function Create({
  studentId,
  studentName,
  studentClass,
  studentMobile,
  studentGender,
}) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [std, setStd] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    // piche se jo studentName nam ke variable me jo exist value pass ho rha hai
    // usko setName ke through name nam ke state me set kar rhe hain
    setName(studentName);
    setId(studentId);
    setmobNo(studentMobile);
    setGender(studentGender);
    setStd(studentClass);
  }, [studentName, studentId, studentMobile, studentGender, studentClass]);

  let arrValues = Students.map((element) => {
    return element.id;
  });
  //    console.log(arrValues);       //output [1, 2, 3, 4, 5, 6, 7, 8]
  let index = arrValues.indexOf(studentId);

  const handleUpdate = () => {
    Students[index].name = name;
    Students[index].class = std;
    Students[index].mobile = mobNo;
    setId("");
    setName("");
    setStd("");
    setmobNo("");
    setGender("");
  };

  const disabledBtn = id.length==0 || name.length==0 || mobNo.length==0
  ||std.length==0 || gender.length==0

  return (
    <div>
      <div>
        <h1>Update Details </h1>
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
              disabled={true}
              required
            />
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
              disabled={true}
              required
            />
          </div>
          <Link>
            <button
             disabled={disabledBtn}
             onClick={handleUpdate} type="submit">
              Update
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
