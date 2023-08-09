"use client"

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

export default function Home() {

  const [user] = useAuthState(auth);

  return (
    <main className="flex flex-col">
      {!user ? <Welcome /> : <ChatBox />}
    </main>
  );
}
