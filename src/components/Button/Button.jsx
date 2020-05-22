import React from 'react';
import './Button.css';

const Button = (props) => {
    return ( 
        <div>
            <button 
                onClick={() => props.setValue(7)} 
                className="Button">7
            </button>
            <button 
                onClick={() => props.setValue(8)} 
                className="Button">8
            </button>
            <button 
                onClick={() => props.setValue(9)} 
                className="Button">9
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">x
            </button>
            <button 
                onClick={() => props.setValue(4)} 
                className="Button">4
            </button>
            <button 
                onClick={() => props.setValue(5)} 
                className="Button">5
            </button>
            <button 
                onClick={() => props.setValue(6)} 
                className="Button">6
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">-
            </button>
            <button 
                onClick={() => props.setValue(1)} 
                className="Button">1
            </button>
            <button 
                onClick={() => props.setValue(2)} 
                className="Button">2
            </button>
            <button 
                onClick={() => props.setValue(3)} 
                className="Button">3
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">+
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">0
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">.
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">=
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">/
            </button>
        </div>
     );
}
 
export default Button;