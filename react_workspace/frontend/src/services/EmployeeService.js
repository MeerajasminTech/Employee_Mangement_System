import axios from 'axios';
const EMPLOYEE_API = "http://localhost:9191/api/v1/employees";

class EmployeeService
{
       addEmployee(employee)
       {
            return axios.post(EMPLOYEE_API,employee);
       } 
       getAllEmployees()
       {
            return axios.get(EMPLOYEE_API);
       }
       getEmployeeById(employeeId)
       {
          return axios.get(EMPLOYEE_API+'/'+employeeId);
       }
       updateEmployee(employeeId,employee)
       {
          return axios.put(EMPLOYEE_API+'/'+employeeId,employee);
       }
       deleteEmployee(employeeId)
       {
         return axios.delete(EMPLOYEE_API+'/'+employeeId);
       }
       searchEmployee(name)
       {
          return axios.get(EMPLOYEE_API + "/search/" + name);
     }
     getEmployeeCount(){
    return axios.get(EMPLOYEE_API+"/count");
     }
     getEmployeesPage(page,size){
    return axios.get(`http://localhost:9191/api/v1/employees/page?page=${page}&size=${size}`);
}

}
export default new EmployeeService();


