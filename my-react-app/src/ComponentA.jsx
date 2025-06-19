import React, {useState} from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
    const [user, setUser] = useState("Devbyte");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>
                {
                `Welcome ${user}`
                }
            </h2>

            <ComponentB user={user}/>
        </div>

    );
}

export default ComponentA