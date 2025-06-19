import React, {useState, useEffect, useRef} from "react"

function UseRefLesson() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);


    useEffect( () => {
        console.log("Component rendered");
    });

    function handleClick1() {
        ref1.current.focus();
        ref1.current.style.backgroundColor = "red";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        ref2.current.focus();
        ref2.current.style.backgroundColor = "red";
        ref1.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
    }   

    function handleClick3() {
        ref3.current.focus();
        ref3.current.style.backgroundColor = "red";
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "";
    }

    return(
        <div className="ref">
            <button onClick={handleClick1}>Click me!</button><br />
            <input ref={ref1} type="text" /><br /><br />
            
            <button onClick={handleClick2}>Click me!</button><br />
            <input ref={ref2} type="text" /><br /><br />
            
            <button onClick={handleClick3}>Click me!</button><br />
            <input ref={ref3} type="text" /><br /><br />
            
        </div>
    );
}

export default UseRefLesson