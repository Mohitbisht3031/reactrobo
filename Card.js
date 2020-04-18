import React from 'react';
 
const Card= (props) =>{
   const {name}=props;
    return(
        <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img alt="robots" src= {`https://robohash.org/${name}?200x200`}></img>
           <div>
             <h2>{name}</h2>
             <p></p>
           </div>
        </div>
    )
}




export default Card;