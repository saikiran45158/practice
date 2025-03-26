import { JSX, useRef} from "react";
import { EmpObjectType } from "../types/employee.types";
import EmployeeObject from "../services/employeeService";
import React from "react";

export default function Update():JSX.Element {
    const eid = useRef<HTMLInputElement>(null);
    const ename = useRef<HTMLInputElement>(null);
    const edesig = useRef<HTMLInputElement>(null);
    const edept = useRef<HTMLInputElement>(null);
    const esal = useRef<HTMLInputElement>(null);

    async function fetchUserData() {
        if(!eid.current || !eid.current.value) {
            console.log("Enter a valid ID");
            window.alert('enter value')
            return;
        }
        console.log(eid.current.value)
        const EmpData:Partial<EmpObjectType>=await EmployeeObject.getEmployee(Number(eid.current.value))
        console.log('->',EmpData)
        ename.current!.value=EmpData.EmpName!
        edesig.current!.value=EmpData.EmpDesig!
        edept.current!.value=EmpData.EmpDept!
        esal.current!.value=EmpData.EmpSal!.toString();
    }

    function handleSubmit(eve: React.FormEvent) {
        eve.preventDefault();
        if (!eid.current || !ename.current ||!edesig.current || !edept.current ||!esal.current) {
            console.log("Enter values");
            window.alert('enter all values')
            return;
        }

        const data = {
            EmpId: Number(eid.current.value),
            EmpName: ename.current.value,
            EmpDesig:edesig.current?.value,
            EmpDept:edept.current.value,
            EmpSal: Number(esal.current.value)
        };

        console.log(data);
        EmployeeObject.editEmployee(data.EmpId,data)
    }

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "3%" }}>
            
            <form onSubmit={handleSubmit} style={{width:'auto',display:'flex',flexDirection:'column',alignItems:"center", gap:'10px'}}>
                <input type="number" ref={eid} placeholder="Enter Id" />
                <button type="button" onClick={fetchUserData}>
                    Fetch Employee
                </button>
                <input type="text" ref={ename} placeholder="Enter Name" />
                <input type="text" ref={edesig} placeholder="Enter Designation" />
                <input type="text" ref={edept} placeholder="Enter Department" />
                <input type="number" ref={esal} placeholder="Enter Salary" />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
