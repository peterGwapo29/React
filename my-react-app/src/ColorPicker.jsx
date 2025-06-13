import React, {useState} from 'react';


function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');
    const handleColor = () => {
        setColor(event.target.value);
        document.getElementById('color-picker').style.backgroundColor = event.target.value;
    }

  return (
    <div id="color-picker">
        <h1>Color Picker</h1>
      <label>
        <input type="color" onChange={handleColor}/>
      </label>
      <p>Selected Color: <strong>{color}</strong></p>
    </div>
  );
}

export default ColorPicker