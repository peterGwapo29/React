import React, {useState} from 'react';

function Food() {

    const [foods, setFoods] = useState(["Adobo", "Sushi", "Pizza"]);
    
    function addFood() {
        const  newFood= document.getElementById('addFood').value;
        document.getElementById('addFood').value = '';

        setFoods(f => [...f, newFood]);
    }

    function handleRemove(index) {
        setFoods(foods.filter((dlt, i) => i !== index));
    }
    return(
        <div className="food">
            <ul>
                {foods.map((foods, index) => (
                    <li onClick={ () => handleRemove(index) } key={index}>{foods}</li>
                ))}
            </ul>

            <input id="addFood" type="text" placeholder='Enter Food'/>
            <button onClick={addFood}>Add food</button>
            
        </div>
    );
}

export default Food