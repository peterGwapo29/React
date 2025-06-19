import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("Devbyte");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2> </h2>

            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>

    );
}

export default ComponentA