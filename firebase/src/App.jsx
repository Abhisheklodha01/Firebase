import { useState } from "react";
import { useFirebase } from "./context/Firebase";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  console.log(firebase);

  return (
    <>
      <div>
        <h1>Firebase</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => {firebase.SignupuserwithEmailPassword(email, password)
                                firebase.putData("users/" + "abhi", ({email, password}))
        }}>
         Login
        </button>
     </div>
    </>
  );
}

export default App;
