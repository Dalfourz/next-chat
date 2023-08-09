"use client";
import { auth, db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FormEvent, useState } from "react";

export default function SendMessage() {
  const [message, setMessage] = useState<string>("");
  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser || {};
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("")
  };

  return (
    <div className="bg-blue-300 sticky bottom-0 py-4">
      <form action="" onSubmit={(event) => sendMessage(event)}>
        <label htmlFor="messageInput" className="">Enter Message</label>
        <input
          type="text"
          placeholder="type message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </ div>
  );
}
