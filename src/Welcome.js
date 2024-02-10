import React from "react";
import {useNavigate} from 'react-router-dom';
export default function Welcome() {
    {
        const navigate = useNavigate();
        const login = () => {
            navigate("login");
        }
        const register = () => {
            navigate("register");
        }
        return (<>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container text-center">
                    <h5>Welcome to Users Module</h5> <br/>
                    <h6>Existing Users</h6> <br /> 
                    <button type="button" className="btn btn-outline-dark custom" onClick={login}>Login</button>  <br /> <br/>
                    <h6>New Users</h6> <br /> 
                    <button type="button" className="btn btn-outline-dark custom" onClick={register}>Register</button>  
                </div>
            </div>
        </>);
    }
}