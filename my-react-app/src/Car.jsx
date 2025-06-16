import React, { useState } from 'react';

function Cars() {
    const [cars, setCar] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleRemove(index) {
        setCar(c => c.filter((dlt, i) => i !== index));
    }

    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake, 
                        model: carModel};
        
        setCar(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleYear(event) {
        setYear(event.target.value);
    }

    function handleMake(event) {
        setMake(event.target.value);
    }

    function handleModel(event) {
        setModel(event.target.value);
    }

    
    return (
        <div className="car-div">
            <h1>List of car:</h1>

            <ul>
                { cars.map((car, i) => <li key={i} onClick={ () => handleRemove(i) }> {car.year} {car.make} {car.model} </li> )}
            </ul>

            <input type="number" value={carYear} onChange={handleYear} placeholder='Enter year'/><br />
            <input type="text" value={carMake} onChange={handleMake} placeholder='Enter Car Make' /><br />
            <input type="text" value={carModel} onChange={handleModel} placeholder='Enter Car Model'/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default Cars