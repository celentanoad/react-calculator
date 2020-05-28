import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Results from '../Results/Results';
import './Calculator.css';

const Calculator = (props) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [sign, setSign] = useState(0);
    const [result, setResult] = useState(0);


    function reset() {
        setValue1(0);
        setValue2(0);
        setSign(0);
        setResult(0);
    }

    return ( 
        <>
            <Results result={result}/>
            <Buttons result={result} setResult={setResult} setValue1={setValue1} setValue2={setValue2} value1={value1} value2={value2} setSign={setSign} sign={sign}/>
            <button 
                className="Clear-button"
                onClick={() => reset()}
            >Reset</button>
        </>

     );
}
 
export default Calculator;