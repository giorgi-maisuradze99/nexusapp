import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = (props) => {
  const { setIsAutenthicated } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAutenthicated(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>
        Welcome To <br></br>
        <b>Nexus</b>
      </h1>
      <button className="signin-button" onClick={() => signInWithGoogle()}>
        Sign In With Google
      </button>
    </div>
  );
};

export default Auth;
