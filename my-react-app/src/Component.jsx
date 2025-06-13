import React, {useState} from 'react';

function Component() {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Start Count");


    const Increment = () => {
        if(count < 10){
            setCount(count + 1);
            setTitle("Count is Incremented");
        }else{
            setTitle("Reach maximum limit of 10");
        }
    }

    const Decrement = () => {
        if(count >0){
            setCount(count - 1);
            setTitle("Count is Decremented");
        }else{
            setTitle("Count is already Zero");
        }
    }

    const Reset = () => {
        setCount(0);
        setTitle("Count is Reset to Zero");
    }

  return (
    <div className="parent">
        <h1>{title}</h1>
        <p>number is: {count}</p>

        <div className="buttons">
            <button onClick={Increment} >Increment</button>
            <button onClick={Decrement} >Decrement</button>
            <button onClick={Reset} >Reset</button>
        </div>
    </div>
  );
}

export default Component