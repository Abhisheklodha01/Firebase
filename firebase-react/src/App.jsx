import react from 'react'
import './App.css'
import { app } from './firebase/firebase.js'

import {putdata} from './firebase/putdata.js'
import { signUpUser } from './firebase/auth.js'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'





function App() {

  return (
    <>

       <div>
       <SignUp />
       <br />
       <br />
       <br />
       <Login />
       </div>
       
      
       
    </>
  )
}

export default App
