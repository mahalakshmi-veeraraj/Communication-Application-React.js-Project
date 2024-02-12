import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const emailInputRef = useRef(null);
    useEffect(() => {
        emailInputRef.current.focus();
    });

    const handleLogin = (event) => {
        event.preventDefault();
        let user = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        };
        if (user.email == "") {
            alert("Please enter email");
            return;
        }

        if (user.password == "") {
            alert("Please enter password");
            return;
        }
        let usersArray = JSON.parse(localStorage.getItem("users"));
        if (usersArray == null) {
            alert("User not found");
            return;
        }
        const result = usersArray.filter((u) => u.email == user.email);
        if (result.length && result[0].password == user.password) {
            user.id = result[0].id;
            user.fullName = result[0].fullName;
            localStorage.setItem("loggedinuser", JSON.stringify(user));
            navigate("/loginsucess");
        } else {
            alert("Please check the user credentials..");
            return;
        }
    }
    return (
        <>
            <div className="container h-100 d-flex flex-column justify-content-center">
                <form onSubmit={handleLogin}>
                    <label className='d-block text-center mb-3' style={{ fontWeight: 'bolder' }}>Login</label>
                    <div className="form-group row justify-content-center mb-3">
                        <label className="col-sm-2 col-form-label" htmlFor="email">Email</label>
                        <input className="col-sm-4 col-form-control" type="email" name="email" ref={emailInputRef} />
                    </div>
                    <div className="form-group row justify-content-center mb-3">
                        <label className="col-sm-2 col-form-label" htmlFor="password" >Password</label>
                        <input className="col-sm-4 col-form-control" type="password" name="password" />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-outline-dark custom" style={{ backgroundColor: 'cyan' }} type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

// d-flex = displayFlex
// d-block = displayBlock