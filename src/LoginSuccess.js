import Nav from './Nav';

export default function LoginSuccess() {
    let loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
    return (<>
        <Nav />
        <div className="container text-center">
            <h1>Login Successful</h1> <br /> <br />
            <h5>Welcome ! {loggedinuser.email}</h5>
        </div>
    </>);
}