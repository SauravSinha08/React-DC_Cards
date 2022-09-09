import React, { useState } from "react";

const Card = ({Character, About}) => {
    const[show, setshow] = useState(false);
    return(
        <>
        <div className="main">
            <div className="point">
                <button onClick={ () => setshow(!show)}>{show ? "➖" : "➕"}</button>
                <h3>{Character}</h3>
            </div>
            { show && <p>{About}</p>}
        </div> 
        </>)
}

export default Card;