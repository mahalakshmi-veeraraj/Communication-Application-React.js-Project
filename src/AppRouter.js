import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';
import UserList from './UserList';
import UserEdit from './UserEdit';
import NotFound from './NotFound';
import Main from "./Main";
import LoginSuccess from "./LoginSuccess";

export default class AppRouter extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}>
                            <Route index element={<Welcome />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="registersuccess" element={<RegisterSuccess />} />
                            <Route path="loginsucess" element={<LoginSuccess />} />
                            <Route path="logout" element={<Logout/>}/>
                            <Route path="userlist" element={<UserList />} />
                            <Route path="useredit/:id" element={<UserEdit/>} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}


// useredit/:id - (Dynamic URL)
// useredir/1707386109807 - (Dynamic ID)
// useredit/1707386109808 - (Dynamic ID)