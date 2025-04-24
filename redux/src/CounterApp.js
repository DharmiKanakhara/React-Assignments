import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './reducerCounter'
import './App.css'

function CounterApp() {

 const count = useSelector(state=>state.counter)
 const dispatch =useDispatch()
  
  return (
    <div className='App '>
      <h1>Counter App Redux</h1>
      <div className="d-flex  gap-3 justify-content-center">
      <button onClick={()=>
      {
        dispatch(decrement({type:"dec"}))
      }}>-</button>
      <h4>{count}</h4>
      <button onClick={()=>
      {
        dispatch(increment({type:"inc"}))
      }}>+</button>
      </div>
    </div>
  )
}

export default CounterApp
