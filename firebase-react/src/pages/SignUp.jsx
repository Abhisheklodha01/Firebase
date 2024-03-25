import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUSer = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
    alert("success")
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup">
      <label htmlFor="">Email</label>
      <input
        type="email"
        placeholder="Enter your email email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />
      <label htmlFor="">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={createUSer}>Sign Up</button>
    </div>
  );
};

export default SignUp;
