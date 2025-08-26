import React from 'react'
import { useActionState } from 'react'

function UseActionStateHook() {

    async function handleSubmit(prevData,formData){
        
        let name= formData.get('name')
        let password= formData.get('password')

        await new Promise((res)=> setTimeout(res,2000))
        // console.log("function called",name,password)

        if(name && password){
            return {message:"Data Submitted"}
        }
        else{
            return {error:"Inavlid data"}
        }

        
    }

    const[data,action,pending]= useActionState(handleSubmit,undefined)
    

  return (
    <div>
      <h1>useActionState Hook in react</h1>
      <form action= {action}>
        <input type="text" placeholder='Enter Name' name='name'/>
        <br /><br />
        <input type="password" placeholder='password' name='password'/>
        <br /><br />
        <button disabled={pending}>Submit</button> 
        {/* disabled={pending} iska mtlb agar pending true h to ye kaam krega */}
        {
            data?.error && <span>{data?.error}</span>
        }
        {
            data?.message && <span>{data?.message}</span>
        }
      </form>
    </div>
  )
}

export default UseActionStateHook
