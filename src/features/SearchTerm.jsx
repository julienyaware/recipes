import React from 'react';
import styles from './../styles/searchTerm.css'

function SearchTerm(props) {
    return (
        <div>
            <form>
                <input className="searchTerm" type="search" placeholder="Search recipe" name="search" />
            </form>
        </div>
    );
}

export default SearchTerm;