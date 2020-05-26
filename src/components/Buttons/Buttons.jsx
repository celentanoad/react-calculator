import React from 'react';
import Button from '../Button/Button';
import './Buttons.css';

const Buttons = (props) => {
    return ( 
        <div className="Buttons">
            <Button result={props.result} setResult={props.setResult} setValue1={props.setValue1} setValue2={props.setValue2} value1={props.value1} value2={props.value2} sign={props.sign} setSign={props.setSign}/>
        </div>
     );
}
 
export default Buttons;