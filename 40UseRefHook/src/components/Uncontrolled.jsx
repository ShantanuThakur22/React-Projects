import React,{useRef} from 'react'


function Uncontrolled() {

    const userRef= useRef()
    const passwordRef= useRef()

    function handleSubmit(e){
        e.preventDefault()
        const user= document.querySelector('#user').value 
        const password= document.querySelector('#password').value 
        console.log(user,password)
    }
    function handleSubmitRef(e){
        e.preventDefault()
        const user= userRef.current.value

        console.log(user)
    }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="" method='post' onSubmit={handleSubmit}>
        <input type="text" id='user' placeholder='Username'/>
        <br /><br />
        <input type="password" id='password' placeholder='enter password' />
        <button>Submit</button>
      </form>
      <hr />
      <h1>Uncontrolled Component with useRef</h1>
      <form action="" method='post' onSubmit={handleSubmitRef}>
        <input type="text" ref={userRef} placeholder='Username'/>
        <br /><br />
        <input type="password" ref={passwordRef} placeholder='enter password' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
