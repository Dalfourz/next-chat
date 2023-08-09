import { auth } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Message({message}) {
    
  const [user] = useAuthState(auth)

  return (
    <div className="flex py-2 px-2">
        <img src={message.avatar} alt="user avatar" className=""/>
        <div className="px-2">
            <p className="">{message.name}</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}
