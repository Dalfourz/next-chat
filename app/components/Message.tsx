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

export default function Message({ message }: MessageProps) {
  const [user] = useAuthState(auth);
  const currentUser = user || null;
  
  const isCurrentUser = currentUser && message.uid === currentUser.uid;
  const chatBubbleClassName = `flex px-2 py-1 ${isCurrentUser ? "chat__bubble--right" : ""}`;

  return (
    <div className={chatBubbleClassName}>
      <img src={message.avatar} alt={`${message.name}'s avatar`} className="avatar" />
      <div className="px-2">
        <p className="sm:text-2xl font-semibold">{message.name}</p>
        <p className="sm:text-2xl">{message.text}</p>
      </div>
    </div>
  );
}
