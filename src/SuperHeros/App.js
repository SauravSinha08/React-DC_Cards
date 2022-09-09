import React, { useState } from "react";
import char from "./superheros";
import Card from "./card";
import './App.css';

const Heros = () => {

    const[data, setdata] = useState(char);


    return(
        <>
        <section>
            <h1>SuperHeros Universe</h1>
            {data.map((elem) => {
            const{Id} = elem;
            return <Card key={Id} { ...elem}/>
        })}
        </section>
        
        </>
    )
}

export default Heros;