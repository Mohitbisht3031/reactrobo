import React from "react";


const Searchbox=({searchfield, searchChange}) =>{
    return(
       <div className="pa3 ba b--green bg-lightest-blue">
         <input type="search" 
          placeholder="search robots">
          onchange={searchChange}
          </input>
        
       </div>
    )
}

export default Searchbox;