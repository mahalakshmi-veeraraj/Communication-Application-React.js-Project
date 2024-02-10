import { Link } from 'react-router-dom';

function Nav() {
    return (<>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: 'gray' }}>
                        <ul className="navbar-nav">
                            <li className="nav-item col-sm-10">
                                <Link className="nav-link active border border-dark" to="/">Group Chat</Link>
                            </li>
                            <li className="nav-item col-sm-10">
                                <Link className="nav-link active border border-dark" to="/userlist">Manage Users</Link>
                            </li>
                            <li className="nav-item col-sm-10">
                                <Link className="nav-link active border border-dark" to="/">Manage Documents</Link>
                            </li>
                            <li className="nav-item col-sm-10">
                                <Link className="nav-link active" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>);
}

export default Nav;