import React from "react";

function Search({search, setSearch, setIsChecked}) {
    return(
        <div className="Search">
            <input type="text" placeholder="Search A Recipe" className="prompt" value={search} onChange= {(e) => setSearch(e.target.value)}  />
        </div>
        // <div className='Search'>
        //     <input type="text" placeholder="Search" value={search} onChange= {(e) => setSearch(e.target.value)/>
    )
}



export default Search
