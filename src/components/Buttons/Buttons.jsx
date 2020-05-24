import React from 'react';
import Button from '../Button/Button';
import './Buttons.css';

const Buttons = (props) => {
    return ( 
        <div className="Buttons">
            <Button setValue={props.setValue} value={props.value} sign={props.sign} setSign={props.setSign}/>
        </div>
     );
}
 
export default Buttons;