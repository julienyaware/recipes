import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../features/SearchTerm';
import styles from './../styles/navBar.css'

function NavBar(props) {
    return (
        <div className="navBar">
            <nav className="nav">
                <ul className="menus">
                    <li className="menu_item">
                        <Link className="menu_link" to="/">Home</Link>
                    </li>
                    <li className="menu_item">
                        <Link className="menu_link" to="/categories">Categories</Link>
                    </li>
                </ul>

                <div className="menu_search">
                    <Search />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;