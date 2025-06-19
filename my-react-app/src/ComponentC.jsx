import React, {useState} from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello ${props.user}`}</h2>
            <ComponentD user={props.user}/>
        </div>

    );
}

export default ComponentC