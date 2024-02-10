import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("loggedinuser");
        navigate("/");
    }, [navigate]);

    return (
        <div>
            <h2>This is Logout Functional Component</h2>
        </div>
    );
}
