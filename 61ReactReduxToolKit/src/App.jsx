import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counter/CounterSlice'

function App() {
  const[amount,setAmount] = useState(0)
  const count= useSelector((state)=> state.counter.value)
  const dispatch= useDispatch()

  function handleIncreament(){
    dispatch(increment())
  }
  function handleDecreament(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }
  function handleIncByAmt(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <>
      <div>
        <button onClick={handleIncreament}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecreament}>-</button>
        <button onClick={handleReset}>Reset</button>
        <br /><br />
        <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
      </div>
      <button onClick={handleIncByAmt}>Increase by ammount</button>
    </>
  )
}

export default App
