import { auth } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

interface MessageData {
  id: string;
  uid: string;
  user: string;
  text: string;
  name: string;
  avatar: string;
  createdAt: number | string;
}

interface MessageProps {
  message: MessageData;
}

export default function Message({message}: MessageProps) {
    
  const [user] = useAuthState(auth)

  return (
    <div className={`flex px-2 py-1 "" ${message.uid === user.uid ? "chat__bubble--right" : ""}`}>
        <img src={message.avatar} alt="user avatar" className=""/>
        <div className=" px-2">
            <p className="sm:text-2xl font-semibold">{message.name}</p>
            <p className="sm:text-2xl">{message.text}</p>
        </div>
    </div>
  )
}
