import React, {useContext} from "react";
import API from "../../utils/API";
import SearchContext from '../../utils/SearchContext';
import './style.css';

export default function Search() {
    const { searchTerm, setSearchTerm, setProducts } = useContext(SearchContext);
    function productSearch(e) {
        e.preventDefault();
        API.search(searchTerm)
        .then(res => {
            setProducts(res.data);
        });
    }
    return (
        <form action="/search">
            <label htmlFor="searchBar" className="visually-hidden">Search</label>
            <input type="search" id="searchBar" name="searchBar" placeholder="Search Best Buy" onChange={ e => {setSearchTerm(e.target.value)} }/>
            <button id="searchButton" type="submit" onClick={e => productSearch(e)}><img src="images/magnify.svg" alt="Search Best Buy" /></button>
        </form>
    )
}