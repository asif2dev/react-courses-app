import React from 'react'

function User({user}) {
  return (
    <div className="card">
        <h4>{user.name}</h4>
        <h5 style={{color: 'grey'}}><small > website:</small> {user.website}</h5>
    </div>
  )
}

export default User