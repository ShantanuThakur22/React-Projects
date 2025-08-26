import React, { useState, useTransition } from 'react'

function UseTransitionHook() {
    const[pending,startTranstion] = useTransition()


    // const[pending,setPending]= useState(false)

    // async function handleButton(){
    //     setPending(true)

    //     await new Promise((res)=> (
    //         console.log(res),
    //         setTimeout(res,2000)))

    //     setPending(false)
    // }

    const handleButton = async ()=>{
        startTranstion(async()=>{
            await new Promise((res)=> setTimeout(res,2000))
        })
    }
  return (
    <div>
      <h1>UseTransition Hook in React19</h1>
      {
        pending?
        <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" alt="" style={{width:"100px"}}/>
        :null
      }
      <button disabled={pending}  onClick={handleButton}>Click</button>
    </div>
  )
}

export default UseTransitionHook
/**
 * this is
 * !hello
 * ?Batti
 * TODO:
 */
