import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3 container">

            <div className="d-flex justify-content-around align-items-center w-100">
                <h2 className="mr-3">Contact List</h2>
                
                <Link to="/create-contact">
                    <button className="btn btn-primary">Add New Contact</button>
                </Link>
            </div>
        </nav>
    );
};