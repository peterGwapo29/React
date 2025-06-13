import React, {useState} from 'react';

function Component() {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Pick up');

    const handleChange = () => {
        setName(event.target.value);
    }

    const handleQuantity = () => {
        setQuantity(event.target.value);
    }

    const handlePayment = () => {
        setPayment(event.target.value);
    }

    const handleShipping = () => {
        setShipping(event.target.value);
    }


  return (
    <div className="parent">
        <h1>On change lesson:</h1>
        <br />
        <br />

        <input type="text" value={name} onChange={handleChange}/>
        <p>Name: {name}</p><br />

        <input type="number" value={quantity} onChange={handleQuantity}/>
        <p>Quantity: {quantity}</p><br />

        <select name="payment" onChange={handlePayment}>
            <option value="">Select Payment</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment method: {payment}</p>
        <br />

        <label>
            <input  type="radio"
                    value="Pick up"
                    checked={shipping === 'Pick up'} 
                    onChange={handleShipping}/>Pick up
        </label>
        <br />

        <label>
            <input type="radio" 
                    value="Delivery"
                    checked={shipping === 'Delivery'} 
                    onChange={handleShipping}/>Delivery
        </label>

        <p>Shipping: <strong>{shipping}</strong></p>
    </div>
  );
}

export default Component