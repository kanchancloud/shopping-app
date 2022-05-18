import React from 'react';
import {baseUrl} from "../page/HomePage";

function SearchBar(){
    const searchUrl=baseUrl;

    return (
        <div>
            {searchUrl }
        </div>
    );
}

export default SearchBar;
