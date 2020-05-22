import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import Results from '../Results/Results';

const Calculator = () => {
    const [value, setValue] = useState(0);
    return ( 
        <>
            <Results value={value}/>
            <Buttons setValue={setValue} value={value}/>
        </>

     );
}
 
export default Calculator;