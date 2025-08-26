import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import PostPage from './components/PostPage.jsx'

const User=()=>{
  const prams= useParams()
  console.log(prams)
  return(
    <div>
      <h1>My name is {prams.userId}</h1>
    </div>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:userId' element={<User/>}/>
      <Route path='/post/:postid' element={<PostPage/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
