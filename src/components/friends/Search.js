import React from 'react';

function Search({ search, onSearchChange }){

    return (
        <div className="search-bar">
            <input
                className="search"
                type="text"
                autoComplete="off"
                id="search"
                placeholder="&#xF002;"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default Search;