import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className = "header" >
            <div className={"nav-items"}>
                <Link className = "nav-link" to='/Home'>HOME</Link>
                <Link className = "nav-link" to='/Post'>POST</Link>
            </div>
        </div>
    )
};

export default NavBar;
