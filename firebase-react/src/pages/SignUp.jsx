import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.js";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    createUserWithEmailAndPassword(auth, email, password);
    alert("success");
    setEmail("");
    setPassword("");
  };

  const SignupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
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

      <br />
      <br />
      <br />
      <button onClick={SignupWithGoogle}>Sign In with google</button>
      <br />
      <br />
      <br />

      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignUp;
