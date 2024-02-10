import { Link } from "react-router-dom";
import Nav from './Nav';
import { useState } from 'react';

export default function UserList() {
    let deleteUserId = 0;
    let usersArray = JSON.parse(localStorage.getItem("users"));
    let loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"));
    const [dummy, setDummy] = useState('Dummy');

    const assignDeleteUserId = (event, id) => {
        event.preventDefault();
        deleteUserId = id;
    }

    const handleDeleteCancel = (event) => {
        event.preventDefault();
        deleteUserId = 0;
    }

    const handleDeleteOk = (event) => {
        event.preventDefault();
        let filteredResult = usersArray.filter((u) => u.id != deleteUserId);
        localStorage.setItem("users", JSON.stringify(filteredResult));
        setDummy("Dummy1");
        alert("User Deleted Sucessfully");
    }

    return (<>
        <Nav />
        <div>
            <label className='d-block mb-3' style={{ fontWeight: 'bolder', marginLeft: '20px' }}>Users</label>
            <table className="table table-striped table-bordered" style={{ width: '-webkit-fill-available' }}>
                <thead className="thead-light" style={{ height: '50px' }}>
                    <tr className="table-light">
                        <th className="text-center table-light border border-dark" style={{ backgroundColor: 'lightgrey' }}>Name</th>
                        <th className="text-center table-light border border-dark" style={{ backgroundColor: 'lightgrey' }}>User Email ID</th>
                        <th className="table-light border border-dark" style={{ backgroundColor: 'lightgrey' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersArray.map((u, index) => (
                            <tr key={index} style={{ height: '30px' }}>
                                <td style={{ paddingLeft: '10px' }}>{u.fullName}</td>
                                <td style={{ paddingLeft: '10px' }}>{u.email}</td>
                                <td style={{ paddingLeft: '10px' }}>
                                    <Link to={`/useredit/${u.id}`}>Edit</Link> &nbsp; &nbsp;
                                    {
                                        (loggedInUser.id != u.id) && (
                                            <Link data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={event => assignDeleteUserId(event, u.id)}>Delete</Link>
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDeleteOk}>OK</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleDeleteCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}