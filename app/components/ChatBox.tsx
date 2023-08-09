import { db } from "@/firebase"
import { QuerySnapshot, collection, limit, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import SendMessage from "./SendMessage"
import Message from "./Message"
import { Unsubscribe } from "firebase/auth"

interface MessageData {
  id: string;
  text: string;
  name: string;
  avatar: string;
  createdAt: number | string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<MessageData[]>([])
  const scroll = useRef<HTMLSpanElement>(null)

  useEffect((): Unsubscribe => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    )
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: MessageData[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({...doc.data(), id: doc.id} as MessageData)
      })
      const sortedMessages = fetchedMessages.sort((a,b) => Number(a.createdAt) - Number(b.createdAt));
      setMessages(sortedMessages)
    })
    return () => unsubscribe;
  }, [])

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <>
      <div>
        {messages?.map((message) => (
          <Message key={messages.id} message={message}/>
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll}/>
    </>
  )
}
