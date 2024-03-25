import {getDatabase} from 'firebase/database'
import { app } from "./firebase"

const db = getDatabase(app)
  export const putdata = () => {
    set(ref(db, 'users/abhi'), {
      id: 1,
      name: 'piyush',
      age: 20,
    })
  }
