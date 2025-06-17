import React, { useState, useEffect } from 'react';

function EffectUse() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        if(width < 600) {
           document.body.style.backgroundColor = 'red';
        }else{
              document.body.style.backgroundColor = 'green';
        }
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div className="useEffect">
            <p>Widht: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
}

export default EffectUse