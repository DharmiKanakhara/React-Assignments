import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'
import { dlt} from './reducer'

function Home() {
   const user = useSelector(state=>state.userData)
   const dispatch = useDispatch()
   const nav = useNavigate()
   const handleDelete = (id)=>
   {
      dispatch(dlt({id}))
   }
   const handleEdit = (id) =>
   {  
      
      nav('/edit/'+id)
   }
  return (
    <div>
    <h1 className='text-center my-2'>Redux CRUD</h1>
   <div className='col-1 m-auto'> 
   <Link className='btn btn-primary my-3' to={'/add'}>Add User</Link>
   </div>
      <div>
      <table className='table'>
        <thead className='table-dark'>
            <tr>
                <td>ID</td>
                <td>Email</td>
                <td>Password</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
                user.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button onClick={()=>{handleEdit(user.id)}} className='btn btn-success mx-2'>Edit</button>
                            <button onClick={()=>{handleDelete(user.id)}} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home
