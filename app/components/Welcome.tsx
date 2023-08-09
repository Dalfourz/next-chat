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
    <div className="text-center">
      <h2 className="p-2">Welcome to Next Chat</h2>
      <img src="" alt="" />
      <p className="p-2">Sign in with Google to chat with your friends</p>
      <button className="p-2">
        <Image src={GoogleSignIn} alt="" onClick={googleSignIn}/>
      </button>
    </div>
  );
}
