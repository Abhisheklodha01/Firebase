import { useContext, createContext } from 'react'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyClLOs_8nRiLbr0J09NHhVsG69OCh0f3-Q",
    authDomain: "bookify-99c0c.firebaseapp.com",
    projectId: "bookify-99c0c",
    storageBucket: "bookify-99c0c.appspot.com",
    messagingSenderId: "480349372285",
    appId: "1:480349372285:web:c02b5c2281649923ed1614"
  };


const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)
const FirebaseApp = initializeApp(firebaseConfig)

export const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}