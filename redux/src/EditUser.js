import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { edit } from './reducer'

function EditUser() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const nav = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()

    const handleEdit = (e) =>
    {   
        e.preventDefault()
        dispatch(edit({id,email,password}))
        nav('/')
    }
  return (
    <div>
      <h2 className='text-center my-2'>Edit User</h2>
      <form className='col-xl-6 m-auto'  onSubmit={handleEdit}>
        <div className="form-group">
            
            <label className='d-block my-1'>Email :</label> 
            <input type="email" className=' form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            
        </div>
        <div className='form-group'>
            <label className='d-block my-1'>Password :</label> 
            <input type="password" className=' form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            
        </div>
        <div className='my-2'>
            <input className='btn btn-primary' type="submit" />
        </div>
      </form>
    </div>
  )
}

export default EditUser
