import react, { useEffect, useState } from 'react'
import './App.css'
import { app } from './firebase/firebase.js'
import {putdata} from './firebase/putdata.js'
import { signUpUser } from './firebase/auth.js'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'


const auth = getAuth(app)

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user)
      }
      else {
        console.log("you are logged out");
        setUser(null)
      }
    })
  }, [])

  if (user === null) {
    return (
      <div>
        <SignUp />
        <br />
        <br />
        <br />
        <Login />
      </div>
    )
  }

  return (
    <>

      <div>
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </>
  )
}

export default App
