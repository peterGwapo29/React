import React, {useState} from 'react'

function MyComponent() {

    const [car, setCar] = useState({year: 2020,
                                    make: 'Toyota',
                                    model: 'Corolla'});

    const handleYear = (event) => {
        setCar(c => ({
            ...c, year: event.target.value
        }));
    };
    const handleMake = (event) => {
        setCar(c => ({
            ...c, make: event.target.value
        }));
    };
    const handleModel = (event) => {
        setCar(c => ({
            ...c, model: event.target.value
        }));
    };

    return(
        <div className='cars'>
            <h1>My facorite car is: {car.year} {car.make} {car.model} </h1>

            <input type="number" value={car.year} onChange={handleYear}/><br />
            <input type="text" value={car.make} onChange={handleMake}/><br />
            <input type="text" value={car.model} onChange={handleModel}/><br />
        </div>
    );
}

export default MyComponent