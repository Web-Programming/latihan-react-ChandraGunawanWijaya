import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetail = () => {
    const { userId } = useParams(); // Menggunakan userId sesuai dengan route
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`https://reqres.in/api/users/${userId}`); // Mengambil data berdasarkan userId
                const { data } = res.data;
                setUser({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    avatar: data.avatar,
                });
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch user data.");
                setLoading(false);
            }
        };
        getUser();
    }, [userId]); // Dependency sekarang adalah userId

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">User Details</h2>
            {user && (
                <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
                    <img src={user.avatar} className="card-img-top" alt={`${user.first_name} ${user.last_name}`} />
                    <div className="card-body">
                        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                        <p className="card-text">Email: {user.email}</p>
                    </div>
                </div>
            )}
            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={() => navigate("/")}>Back to Users List</button>
            </div>
        </div>
    );
};

export default UserDetail;
