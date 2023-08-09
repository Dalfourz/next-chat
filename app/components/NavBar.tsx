"use client";
import React, { useState } from "react";
import GoogleSignIn from "../../public/assets/btn_google_signin_dark_pressed_web.png";
import Image from "next/image";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function NavBar() {
  const [user] = useAuthState(auth);
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };
  
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="flex justify-between p-4 bg-green-300 sticky top-0">
      <h1>Next Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="">
          <Image
            onClick={googleSignIn}
            src={GoogleSignIn}
            alt="sign in with google"
            // type="button"
          />
        </button>
      )}
    </nav>
  );
}
