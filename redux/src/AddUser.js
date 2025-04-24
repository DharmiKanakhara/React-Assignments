import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './reducer'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const user = useSelector(state=>state.userData)
    const dispatch = useDispatch()
    const [req,setReq] = useState("none")
    const nav = useNavigate()
    const handleAdd = (e) =>
    {
        e.preventDefault();
        if(email.length===""||password==="")
        {
          setReq("block")
        }
       else
       {
        user.forEach((val)=>{
          if(val.email!==email)
          {
            dispatch(add({id:user.length+1,email,password}))
            nav('/')
          }
          else
          {
            alert("Already registered with this email")
          }
       })
       
       }
    }
  return (
    <div>
    <h2 className='text-center my-2'>Add User</h2>
      <form className='col-xl-6 m-auto' onSubmit={handleAdd}>
        <div className="form-group">
            
            <label className='d-block my-1'>Email :</label> 
            <input type="email" className=' form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <p className={'text-danger d-'+req}>*Required...!!</p>
        </div>
        <div className='form-group'>
            <label className='d-block my-1'>Password :</label> 
            <input type="password" className=' form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <p className={'text-danger d-'+req}>*Required...!!</p>
        </div>
        <div className='my-2'>
            <input className='btn btn-primary' type="submit" />
        </div>
      </form>
    </div>
  )
}

export default AddUser
