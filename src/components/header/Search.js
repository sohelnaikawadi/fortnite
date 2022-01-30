import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './search.css';

function Search() {
    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Search for Products, Brands and More"/>
            <SearchIcon className="search__icon"/>
        </div>
    )
}

export default Search
