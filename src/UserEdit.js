import Nav from './Nav';
import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function UserEdit() {
    const editFullNameInputRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        editFullNameInputRef.current.focus();
    });

    const usersArray = JSON.parse(localStorage.getItem("users"));
    const editUser = usersArray.filter((u) => u.id == id)[0];

    const handleSave = (event) => {
        event.preventDefault();
        debugger
        let currentUser = {
            fullName: event.target.elements.editFullName.value,
            email: event.target.elements.editEmail.value,
        };

        // Execute validation.
        if (currentUser.fullName == "") {
            alert("Please enter full name");
            return;
        }
        if (currentUser.email == "") {
            alert("Please enter email");
            return;
        }

        // Execute save once validation has succeeded.
        let usersArray = JSON.parse(localStorage.getItem("users"));
        let saveUsersArray = [];
        usersArray.map((user) => {
            if (user.id == id) {
                user.fullName = currentUser.fullName;
                user.email = currentUser.email;
            }
            saveUsersArray.push(user);
        });
        localStorage.setItem("users", JSON.stringify(saveUsersArray));
        alert("User updated successfully!!");
        navigate("/userlist");
    }

    return (<>
        <Nav />
        <div className="container text-center">
            <form onSubmit={handleSave}>
                <label className='d-block text-center mb-3' style={{ fontWeight: 'bolder' }}>Edit User Information</label>
                <div className="form-group row justify-content-center mb-3">
                    <label className="col-sm-2 col-form-label">Full Name</label>
                    <input className="col-sm-4 col-form-control" type="text" name="editFullName" ref={editFullNameInputRef} defaultValue={editUser.fullName} />
                </div>
                <div className="form-group row justify-content-center mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <input className="col-sm-4 col-form-control" type="email" name="editEmail" defaultValue={editUser.email} />
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-dark custom" type="submit" style={{ backgroundColor: 'cyan' }}>Save</button>
                </div>
            </form>
        </div>
    </>);
}