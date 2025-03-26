import { JSX, useEffect, useState } from "react"
import { EmpObjectType } from "../types/employee.types"
import EmployeeObject from "../services/employeeService"
export default function Home(): JSX.Element {

    const [employees, setEmployees] = useState<EmpObjectType[]>([])
    useEffect(() => {
        const allEmployees = async () => {
            try {
                const Employees: EmpObjectType[] = await EmployeeObject.getEmployees()
                setEmployees(Employees)
            }
            catch (err) {
                window.alert('error occured')
            }
        }
        allEmployees()

    }, [])
    return (<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <table style={{ border: '2px solid black', marginTop: '3%' }}>
            <thead>
                <tr>
                    <td>EmpId</td>
                    <td>EmpName</td>
                    <td>EmpDesig</td>
                    <td>EmpDept</td>
                    <td>EmpSal</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees?.map((employee, index) => (
                        <tr key={index}>

                            <td>{employee.EmpId}</td>
                            <td>{employee.EmpName}</td>
                            <td>{employee.EmpDesig}</td>
                            <td>{employee.EmpDept}</td>
                            <td>{employee.EmpSal}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>)
}