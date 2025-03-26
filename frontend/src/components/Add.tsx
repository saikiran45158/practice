import {useRef,JSX } from "react"
import React from "react";
import EmployeeObject from "../services/employeeService";
export default function Add():JSX.Element{
    const eid:React.RefObject<HTMLInputElement|null>=useRef(null)
    const ename:React.RefObject<HTMLInputElement|null>=useRef(null)
    const edesig:React.RefObject<HTMLInputElement|null>=useRef(null)
    const edept:React.RefObject<HTMLInputElement|null>=useRef(null)
    const esal:React.RefObject<HTMLInputElement|null>=useRef(null)

    function handleSubmitt(eve: { preventDefault: () => void; }){
        eve.preventDefault();
        if(!eid.current || !ename.current||!edesig.current ||!edept.current || !esal.current){
            console.log('enter values')
            return;
        }
        if(eid.current.value===''|| ename.current.value===''||edesig.current.value==='' ||edept.current.value===''|| esal.current.value==='')
            return window.alert('enter all values')
        const data={EmpId:Number(eid.current.value),EmpName:ename.current.value,EmpDesig:edesig.current.value,EmpDept:edept.current.value,EmpSal:Number(esal.current.value)}
        console.log(data)
        EmployeeObject.addEmployee(data)
    }
    return (<div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'3%'}}>
        <form onSubmit={handleSubmitt} style={{width:'auto',display:'flex',flexDirection:'column',alignItems:"center", gap:'10px'}}>
            <input type='number' ref={eid} placeholder="Enter Id"></input>
            <input type='text' ref={ename} placeholder='Enter Name'></input>
            <input type='text' ref={edesig} placeholder='Enter Designation'></input>
            <input type='text' ref={edept} placeholder='Enter Department'></input>
            <input type='number' ref={esal} placeholder="Enter Salary"></input>
            <button>Add</button>
        </form>
    </div>)
}