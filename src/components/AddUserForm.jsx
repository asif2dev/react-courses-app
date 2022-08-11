import React from 'react'
import '../styles/addNewUserModal.css'

function AddUserForm() {

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(event.target);
        let data = event.target.elements;
        const name = data.user_name.value;
        const id = data.u_id.value;
        const website = data.u_website.value;
        console.log(id,name,website);
    }
    return (
        <div className="addUserForm">
            <form id="addUserForm" onSubmit={handleSubmit}>
                <input className="form-control-input" type="text" name="u_id" id="u_id" /> 
                <input className="form-control-input" type="text" name="user_name" id="user_name" />
                <input className="form-control-input" type="text" name="u_website" id="" />
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}

export default AddUserForm