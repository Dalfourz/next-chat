import Image from "next/image";
import GoogleSignIn from "../../public/assets/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="relative">
      <div className="text-center flex flex-col content-center">
        <h2 className="p-2">Welcome to Next Chat</h2>
        <img src="" alt="" />
        <p className="p-2">Sign in with Google to chat with your friends</p>
        <button className="p-2">
          <Image
            src={GoogleSignIn}
            alt=""
            onClick={googleSignIn}
            className="m-auto"
          />
        </button>
        {/* ENABLE PASSWORD BASE AUTH LATER */}
        {/* <div>
          <p className="mb-2">Or enter your email address</p>
          <form action="">
            <label htmlFor="">Email Address </label>
            <input className="bg-slate-200 mb-2" type="email" />
            <br />
            <label htmlFor="">Password </label>
            <input className="bg-slate-200" type="password" />
          </form>
        </div> */}
      </div>
    </div>
  );
}
