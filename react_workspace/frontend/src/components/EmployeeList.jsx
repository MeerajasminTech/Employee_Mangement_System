import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
function EmployeeList() 
{
  const [employees,setEmployees] = useState([]);

  const [value] = useTypewriter({
    words : ["Details","Information","List"],
    loop: true,
    typeSpeed : 80,
    deleteSpeed : 120
  })

  useEffect(()=>{
    EmployeeService.getAllEmployees().then(res =>{
        setEmployees(res.data);
    })
  },[]);

  
    const searchEmployee = (name) => {
    if(name === ""){
        EmployeeService.getAllEmployees()
            .then(res => setEmployees(res.data))
    } else {
        EmployeeService.searchEmployee(name)
            .then(res => setEmployees(res.data))
    }
}
    const deleteEmployee = (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this employee?"
  );

  if(confirmDelete){
    EmployeeService.deleteEmployee(id)
      .then(() => {
        EmployeeService.getAllEmployees().then(res =>{
          setEmployees(res.data);
        })
      })
      .catch(error =>{
        console.log(error);
      })
  }

}
const [count,setCount] = useState(0);

useEffect(()=>{
 EmployeeService.getEmployeeCount().then(res=>{
   setCount(res.data);
 })
},[]);

const [page,setPage] = useState(0);
const [totalPages,setTotalPages] = useState(0);
useEffect(()=>{
 loadEmployees();
},[page]);
const loadEmployees = () => {

 EmployeeService.getEmployeesPage(page,5)
 .then(res => {
   setEmployees(res.data.content);
   setTotalPages(res.data.totalPages);
 })

}


  return (
    <div className='mt-5'>
        <h3 className='mt-5 text-center pt-3'>Employee {value} <Cursor/> </h3> 
        <div className='container mt-5'>
        
        <div className="d-flex justify-content-between mb-3">

        <a href="/add-emp" className="btn btn-secondary">
            Add Employee
        </a>

        <input
            type="text"
            placeholder="🔍 Search employee..."
            className="form-control w-75"
            onChange={(e)=>searchEmployee(e.target.value)}
        />

</div>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>DOJ</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp =>{
                       return  <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.doj}</td>
                                    <td>{emp.dept.deptName}</td>
                                    <td>{emp.dept.designation}</td>
                                    <td>

                                            <Link to={`/update-emp/${emp.id}`} className='btn btn-warning me-2'>Update</Link>
                                            <button className='btn btn-danger ms-3' onClick={()=> deleteEmployee(emp.id)}> Delete </button>
                                    </td>
                                </tr>
                    })   
                }
            </tbody>
        </table>
        <div className="text-center mt-3">

            <button 
            className="btn btn-secondary me-2"
            disabled={page===0}
            onClick={()=>setPage(page-1)}
            >
            Previous
            </button>

            <span> Page {page+1} </span>

            <button
            className="btn btn-secondary ms-2"
            disabled={page===totalPages-1}
            onClick={()=>setPage(page+1)}
            >
            Next
            </button>

            </div>
        </div>
    </div>
  )
}

export default EmployeeList


