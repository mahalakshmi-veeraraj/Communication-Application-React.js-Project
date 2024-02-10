import React from "react";
import { Link } from 'react-router-dom';

export default class RegisterSuccess extends React.Component {
    render() {
        return (<>
            <div className="container text-center">
                <h1>Registration Successful</h1> <br/>

                <h5>Thank you for your registration</h5>

                <Link to="/">Click to return to home page</Link>
            </div>
        </>
        );
    }
}