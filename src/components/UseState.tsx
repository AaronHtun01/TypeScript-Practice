import { useState } from "react"

interface User {
    name: string
    age: number
}

const UserProfile:React.FC = () => {

    const [user, setUser] = useState<User>({name: "", age: 0})


    const updateUser = () => {
        setUser({name: "Aaron", age: 23})
    }

    return(
        <>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <button onClick={updateUser}>Click</button>
        </>
    )
}

export default UserProfile