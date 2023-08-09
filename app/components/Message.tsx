import { auth } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Message({message}) {
    
  const [user] = useAuthState(auth)

  return (
    <div className="flex">
        <img src={message.avatar} alt="user avatar" className=""/>
        <div>
            <p className="">{message.name}</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}
