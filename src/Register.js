import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function Register() {
    const navigate = useNavigate();
    const fullNameInputRef = useRef(null);
    useEffect(() => {
        fullNameInputRef.current.focus();
    });
    const handleRegister = (event) => {
        event.preventDefault();

        let user = {
            id: Number(new Date()),
            fullName: event.target.elements.fullName.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
            confirmPassword: event.target.elements.confirmPassword.value
        };
        // Execute validation.
        if (user.fullName == "") {
            alert("Please enter full name");
            return;
        }

        if (user.email == "") {
            alert("Please enter email");
            return;
        }

        if (user.password == "") {
            alert("Please enter password");
            return;
        }

        if (user.confirmPassword === "") {
            alert("Please enter confirm password");
            return;
        }

        if (user.password != user.confirmPassword) {
            alert("Confirm password not matched with password");
            return;
        }

        let usersArray = JSON.parse(localStorage.getItem("users"));
        usersArray = usersArray && usersArray.length ? usersArray : [];
        const result = usersArray.filter((u) => u.email == user.email);
        if (result.length && user.email == result[0].email) {
            alert("This email id already exist");
            return;
        }

        // Execute save once validation has succeeded.
        usersArray.push(user);
        let usersArrayJSONString = JSON.stringify(usersArray);
        localStorage.setItem("users", usersArrayJSONString);
        navigate("/registersuccess");
    }
    return (
        <>
            <div className="container h-100 d-flex flex-column justify-content-center">
                <form onSubmit={handleRegister}>
                    <label className='d-block text-center mb-3' style={{ fontWeight: 'bolder' }}>Register</label>
                    <div className="form-group row mb-3 row justify-content-center mb-3">
                        <label className="col-sm-2 col-form-label">Full Name</label>
                        <input className="col-sm-4 col-form-control" type="text" name="fullName" ref={fullNameInputRef} />
                    </div>
                    <div className="form-group row mb-3 row justify-content-center mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <input className="col-sm-4 col-form-control" type="email" name="email" />
                    </div>
                    <div className="form-group row mb-3 row justify-content-center mb-3">
                        <label className="col-sm-2 col-form-label" >Password</label>
                        <input className="col-sm-4 col-form-control" type="password" name="password" />
                    </div>
                    <div className="form-group row mb-3 row justify-content-center mb-3">
                        <label className="col-sm-2 col-form-label"  >Confirm Password</label>
                        <input className="col-sm-4 col-form-control" type="password" name="confirmPassword" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-outline-dark custom" style={{ backgroundColor: 'cyan' }} type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
}