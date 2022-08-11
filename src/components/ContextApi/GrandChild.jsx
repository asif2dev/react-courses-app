import React, {useContext, useRef} from 'react'
import {UserContext} from './Parent'
import GrandGrandChild from './GrandGrandChild'
import UserContextProvider from '../../store/UserContextProvider'

const GrandChild = () => {
  const {userName,setUserName} = useContext(UserContext);
  const uName = useRef();
  const updateUserName = () => {
    const name = uName.current.value;
    if(!name.length){
        alert("Please Enter Name")
        return;
    }
    setUserName(name)
  }
  return (
    <div>
        {/* This component want to set username from Parent component */}
        UserName in GrandChild Through ContextAPI: <strong>{userName}</strong>
        <br />

        <input style={{display: 'block',marginTop : "20px",marginLeft:"6rem"}} type="text" name="uname" ref={uName} placeholder="Enter Name to Update" />
        <button style={{"margin" : "20px 0"}} onClick={updateUserName}>Update User Name </button>
        <small style={{"display" : "block","color" : "red"}}>*Name will be updated using context API to aviod props drilling</small>

        <h4>Grand-Grand Child <small>(UserContextProvider)</small></h4>
        <UserContextProvider>
          <GrandGrandChild />
        </UserContextProvider>
    </div>
  )
}

export default GrandChild