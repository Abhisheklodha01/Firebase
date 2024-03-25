import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUSer = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
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
      <button onClick={LoginUSer}>Login</button>
    </div>
  );
};

export default Login;
