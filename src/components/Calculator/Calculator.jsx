import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Results from '../Results/Results';
import './Calculator.css';


const Calculator = () => {
    const [value, setValue] = useState(0);
    const [sign, setSign] = useState(0);

    function reset() {
        setValue(0);
        setSign(0);
    }

    return ( 
        <>
            <Results value={value}/>
            <Buttons setValue={setValue} value={value} setSign={setSign} sign={sign}/>
            <button 
                className="Clear-button"
                onClick={() => reset()} 
            >Reset</button>
        </>

     );
}
 
export default Calculator;