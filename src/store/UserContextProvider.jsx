import React,{useState,createContext,useContext} from 'react'

export const UsersContext = createContext(null);

// export function myUser() { 
//   return useContext(UsersContext);
// }

const UserContextProvider = ({childern}) => {
    const {user,setUser} = useState("ASIF");
    const {isAuth,setAuth} = useState(false);
    const {isPremiumUser,setPremiumUser} = useState(false);

    const value = {
        user,
        setUser,
        isPremiumUser,
        setPremiumUser,
        isAuth,
        setAuth
    }
    return (
      <UsersContext.Provider value={value}>
        {childern}
      </UsersContext.Provider>
    )
}

export default UserContextProvider