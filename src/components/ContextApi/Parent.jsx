import React,{useState,createContext} from 'react'
import Child from './Child'
export const UserContext  = createContext(null);

const Parent = () => {
    const [userName,setUserName] = useState("ASIF");
  return (
    <UserContext.Provider value={{userName,setUserName}}>
      <div>
          <i>Name in Parent: </i>
          <strong>{userName}</strong>
          <Child />
      </div>
    </UserContext.Provider>
  )
}

export default Parent