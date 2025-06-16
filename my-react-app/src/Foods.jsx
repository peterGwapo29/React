import React, { useState } from 'react';

function Foods() {
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState("");
    const [foodType, setFoodType] = useState("");
    const [foodCalories, setFoodCalories] = useState("");

    function handleRemove(index) {
        setFoods(f => f.filter((_, i) => i !== index));
    }

    function handleAddFood() {
        const newFood = {
            name: foodName,
            type: foodType,
            calories: foodCalories
        };

        setFoods(f => [...f, newFood]);
        setFoodName("");
        setFoodType("");
        setFoodCalories("");
    }

    function handleName(event) {
        setFoodName(event.target.value);
    }

    function handleType(event) {
        setFoodType(event.target.value);
    }

    function handleCalories(event) {
        setFoodCalories(event.target.value);
    }

    return (
        <div className="food-div">
            <h1>List of Food:</h1>

            <ul>
                {foods.map((food, i) => (
                    <li key={i} onClick={() => handleRemove(i)}>
                        {food.name} - {food.type} - {food.calories} calories
                    </li>
                ))}
            </ul>

            <input type="text" value={foodName} onChange={handleName} placeholder="Enter Food Name" /><br />
            <input type="text" value={foodType} onChange={handleType} placeholder="Enter Food Type" /><br />
            <input type="number" value={foodCalories} onChange={handleCalories} placeholder="Enter Calories" /><br />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default Foods;
