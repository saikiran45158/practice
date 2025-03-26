import axios from "axios";
import { EmpObjectType, MsgType } from "../types/employee.types";

class Employee {
    async addEmployee(EmpData: EmpObjectType) {
        try {
            const receivedResponse = await axios.post('http://localhost:5000/add', EmpData,
                {
                    headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            const msg: MsgType = receivedResponse.data
            return window.alert(msg['msg'])
        }
        catch (err) {
            window.alert('error occured')
            console.log(err)
        }

    }
    async getEmployee(EmpId: number): Promise<Partial<EmpObjectType>> {
        try {
            const receivedResponse = await axios.get(`http://localhost:5000/getuser/${EmpId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            const result: EmpObjectType[] = receivedResponse.data
            console.log(result[0])
            if(result.length===0)
                window.alert('user not found')
            return result[0]
        }
        catch (err) {
            window.alert('error occured')
            console.log(err)
            const errMsg: Partial<EmpObjectType> = {}
            return errMsg
        }
    }
    async getEmployees(): Promise<EmpObjectType[]> {
        try {
            const receivedResponse = await axios.get('http://localhost:5000/', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            const result: EmpObjectType[] = receivedResponse.data
            console.log(result)
            return result
        }
        catch (err) {
            window.alert('error occured')
            console.log(err)
            const errMsg: EmpObjectType[] = []
            return errMsg
        }
    }
    async editEmployee(EmpId: number, EmpData: EmpObjectType) {
        try {
            const receivedResponse = await axios
                .patch(`http://localhost:5000/update/${EmpId}`, EmpData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            const msg: MsgType = receivedResponse.data
            return window.alert(msg['msg'])
        }
        catch (err) {
            window.alert('error occured')
        }
    }
    async deleteEmployee(EmpId: number) {
        try {
            const receivedResponse = await axios.delete(`http://localhost:5000/delete/${EmpId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            const msg: MsgType = (await receivedResponse).data
            return window.alert(msg['msg'])
        }
        catch (err) {
            window.alert('error occured')
        }
    }

}
const EmployeeObject = new Employee()
export default EmployeeObject