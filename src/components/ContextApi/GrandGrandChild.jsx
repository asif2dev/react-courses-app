import React, {useContext} from 'react'
import {UsersContext} from '../../store/UserContextProvider'
// import {myUser} from '../../store/UserContextProvider'


const GrandGrandChild = () => {
  const {user,setUser} = useContext(UsersContext);
  return (
    <div>
         {/* {myUser} */}
          User in GrandGrandChild Through ContextAPI (UserContextProvider): <strong>{user}</strong>
        <br />
        <button style={{"margin" : "20px 0"}} onClick={()=>{setUser(true)}}>Set User</button>
    </div>
  )
}

export default GrandGrandChild