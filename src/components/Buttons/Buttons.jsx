import React from 'react';
import Button from '../Button/Button';
import './Buttons.css';

const Buttons = (props) => {
    return ( 
        <div className="Buttons">
            <Button setValue={props.setValue} value={props.value} />
        </div>
     );
}
 
export default Buttons;