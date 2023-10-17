import { useState } from 'react';
import './Input.css';

export default function Input({ placeHolder, inputHandler }) {

    const [ inputValue, setInputValue ] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
        inputHandler(event.target.value)
    }

    return(
        <div className="input-container">
            <input 
                className="input-section" 
                type="text" 
                placeholder={placeHolder}
                value={inputValue}
                onChange={handleInput}
            />
        </div>
    )
}