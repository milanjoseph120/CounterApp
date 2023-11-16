import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/CounterSlice'

function Counter() {
  const [range , setRange] = useState("")
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
    // console.log(range);
  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-column w-100 mt-5'>
        <h1 className='text-white' style={{fontSize:"90px"}}>{count}</h1>
        <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement </button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
        </div>
    </div>
    <div className='mt-5 w-100'>
      <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' placeholder='Enter your Range' style={{borderColor:"blue"}} />
    </div>
    </>
  )
}

export default Counter