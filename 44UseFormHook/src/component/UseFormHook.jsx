import React from 'react'
import {useFormStatus} from 'react-dom'

function UseFormHook() {

    async function handleSubmit(){
        await new Promise((res)=> setTimeout(res,2000))
        console.log("Submitted")
    }

    function CustomerForm(){
        const {pending} = useFormStatus()
        console.log(pending)

        return(
        <div>
        
        <input type="text" placeholder='Enter Name'/>
        <br />
        <input type="password" placeholder='Enter password'/>
        <br />
        <button disabled={pending}>
            {pending? "Submitting":"submit"}
            </button>
      
        </div>)
    }
  return (
    <div>
      <h1>UseForm Hook in React19</h1>
      <form action={handleSubmit}>
      <CustomerForm/>
      </form>
      
    </div>
  )
}

export default UseFormHook
