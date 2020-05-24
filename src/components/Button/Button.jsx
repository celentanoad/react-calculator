import React from 'react';
import './Button.css';

const Button = (props) => {

    function calculate(num1, sign, num2) {
        if (sign === "-") {
            return num1 - num2
        } else if (sign === "x") {
            return num1 * num2
        } else if (sign === "/") {
            return num1 / num2
        } else {
            return num1 + num2
        }
    }

    return ( 
        <div>
            <button 
                onClick={() => !props.value ? props.setValue(7) : props.setValue(calculate(props.value, props.sign, 7))} 
                className="Button">7
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(8) : props.setValue(calculate(props.value, props.sign, 8))}  
                className="Button">8
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(9) : props.setValue(calculate(props.value, props.sign, 9))} 
                className="Button">9
            </button>
            <button 
                onClick={() => !props.sign ? props.setSign('x') : console.log('')} 
                className="Button">x
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(4) : props.setValue(calculate(props.value, props.sign, 4))} 
                className="Button">4
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(5) : props.setValue(calculate(props.value, props.sign, 5))} 
                className="Button">5
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(6) : props.setValue(calculate(props.value, props.sign, 6))} 
                className="Button">6
            </button>
            <button 
                onClick={() => (props.value) ? props.setSign("-") : console.log('')} 
                className="Button">-
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(1) : props.setValue(calculate(props.value, props.sign, 1))} 
                className="Button">1
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(2) : props.setValue(calculate(props.value, props.sign, 2))} 
                className="Button">2
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(3) : props.setValue(calculate(props.value, props.sign, 3))} 
                className="Button">3
            </button>
            <button 
                onClick={() => (props.value) ? props.setSign("+") : console.log('')}
                className="Button">+
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(0) : props.setValue(calculate(props.value, props.sign, 0))} 
                className="Button">0
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">.
            </button>
            <button 
                onClick={() => calculate()}
                className="Button">=
            </button>
            <button 
                onClick={() => (props.value) ? props.setSign("/") : console.log('')}
                className="Button">/
            </button>
        </div>
     );
}
 
export default Button;