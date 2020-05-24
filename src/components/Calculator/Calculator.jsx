import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Results from '../Results/Results';
import './Calculator.css';


const Calculator = () => {
    const [value, setValue] = useState(0);
    const [sign, setSign] = useState('');
    return ( 
        <>
            <Results value={value}/>
            <Buttons setValue={setValue} value={value} setSign={setSign} sign={sign}/>
            <button 
                className="Clear-button"
                onClick={() => setValue(0)} 
            >Reset</button>
        </>

     );
}
 
export default Calculator;