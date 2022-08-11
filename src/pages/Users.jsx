import React,{useEffect, useRef,useState} from 'react'
import '../styles/users.css'
import User from '../components/User'
import {showLoader} from '../helpers/Common'
import NoUserFound from '../components/NoUserFound'
import AddUserForm from '../components/AddUserForm'

function Users() {
    const USERS_API = 'https://jsonplaceholder.typicode.com/users/';
    let numOfUsers = useRef(1);
    const [users, updateUsers] = useState([]);
    function fetchUsers(){
        showLoader();
        let userToFetch = numOfUsers.current.value;
        console.log(userToFetch,typeof userToFetch === 'number' && !isNaN(userToFetch));
        // return false;
        if(isNaN(userToFetch) || userToFetch== ""){
          alert("PLease enter Only Postive numbers")
          return false;
        }
        fetch(USERS_API+userToFetch)
          .then(response => response.json())
          .then(data => {
            // console.log(Object.entries(data));
            let userArray = [];
            if(Object.entries(data).length>0)
              userArray.push(data);
            updateUsers(userArray);
          })
    }
    useEffect(()=>{
      fetch(USERS_API)// returns 10 users
      .then(response => response.json())
      .then(data => {
        updateUsers(data)
      })
    },[])
  return (
    <div className="users-wrapper">
        <div className="card">
          <label htmlFor="numberofUsers" className="fwb">Enter User Id (from 1 to 10):</label>
          <div className="input-group">
            <input type="number" ref={numOfUsers} className="numberofUsers" placeholder="Number of Users"/>
            <button className="fetch-btn" onClick={fetchUsers}>Fetch Users</button>
          </div>
          {/* <button className="addNewUser">Add New User</button> */}
          <AddUserForm />
        </div>
        {/* {showUserForm && 
        }  */}
        <div className={users.length > 0 ? 'list-users' :''}>
            {users.length > 0 ? 
              users.map((user,key) =>{
                console.log(users.length);
                return (
                  <User key={key} user={user} />
                )                 
              })
              : <NoUserFound />
            }  
        </div>
    </div>
  )
}

export default Users