import React, {useState} from "react";

function ComponentD(props) {
    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>
                {
                    `Hello ${props.user}`
                }
            </h2>
        </div>

    );
}

export default ComponentD