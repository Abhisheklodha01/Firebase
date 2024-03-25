import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './firebase'


const auth = getAuth(app)

export const signUpUser = () => {
    createUserWithEmailAndPassword(auth,
         'abhisheklodha512@gmail.com',
          "abhi@123").then((value) => console.log(value))
}