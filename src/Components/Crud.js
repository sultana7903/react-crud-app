import React, {useState} from "react";
import Students from "./Jsondata";
import {Link, useNavigate} from 'react-router-dom';
import Create from "./Create";
import Update from "./Update";

function Crud() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [std, setStd] = useState("");
  const [gender, setGender] = useState("");

  let history = useNavigate();
  
  const handleDelete = (id)=>{
   let arrValues = Students.map((element)=>{
    return element.id
   });
   console.log(arrValues);       //output [1, 2, 3, 4, 5, 6, 7, 8]
   var position = arrValues.indexOf(id);
   Students.splice(position, 1)

   history('/')
   
  }

  const handleEdit = (element)=>{
   setId(element.id)
   setName(element.name)
   setmobNo(element.mobile)
   setStd(element.class)
   setGender(element.gender)
  }
  
  return (
    <div>
      <div className="heading">
        <h1>Students List </h1>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mob No.</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>  
            {  //agr hmlog ko html tags k sath js use krna h to hmlog {} k ander use kar skte h
            Students &&     //&& means if students not empty array.
              Students.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.mobile}</td>
                    <td>{element.class}</td>
                    <td>{element.gender}</td>
                    <td onClick={()=>handleDelete(element.id)}><i className="fa-solid fa-trash"></i>
                    <span className="trash">Trash</span></td>
                    <td onClick={(e)=>handleEdit(element)}><i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    <span className="trash">Edit</span></td>
                  </tr>
                );
              })}   
          </tbody>
        </table>

      <Create/>
      <Update 
      studentId={id}
      studentName={name}
      studentClass={std}
      studentMobile={mobNo}
      studentGender={gender}
       />
        
      </div>
    </div>
  );
}

export default Crud;

