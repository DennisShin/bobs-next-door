import React from "react"

function Search({ setSearchData }) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={(e) => setSearchData(e.target.value)} />
        </div>
    );
}

export default Search;