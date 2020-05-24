import React from 'react';
import './Button.css';

const Button = (props) => {

    let firstNum;

    function resetValue(sign) {
        firstNum = props.value;
        props.setValue(0);
        props.setSign(sign)
    }

    function calculate(num1, sign, num2) {
        if (sign === "-") {
            return num1 - num2
        } else if (sign === "x") {
            return num1 * num2
        } else if (sign === "/") {
            return num1 / num2
        } else {
            if (sign) return num1 + num2
        }
    }

    return ( 
        <div>
            <button 
                onClick={() => !props.value ? props.setValue(7) : props.setValue(`${props.value}7`)}
                className="Button">7
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(8) : props.setValue(`${props.value}8`)}
                className="Button">8
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(9) : props.setValue(`${props.value}9`)}
                className="Button">9
            </button>
            <button 
                onClick={() => !props.sign ? resetValue("x") : console.log('')} 
                className="Button">x
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(4) : props.setValue(`${props.value}4`)}
                className="Button">4
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(5) : props.setValue(`${props.value}5`)} 
                className="Button">5
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(6) : props.setValue(`${props.value}6`)}
                className="Button">6
            </button>
            <button 
                onClick={() => (props.value) ? resetValue("-") : console.log('')} 
                className="Button">-
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(1) : props.setValue(`${props.value}1`)}
                className="Button">1
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(2) : props.setValue(`${props.value}2`)}
                className="Button">2
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(3) : props.setValue(`${props.value}3`)}
                className="Button">3
            </button>
            <button 
                onClick={() => (props.value) ? resetValue("+") : console.log('')}
                className="Button">+
            </button>
            <button 
                onClick={() => !props.value ? props.setValue(0) : props.setValue(`${props.value}0`)}
                className="Button">0
            </button>
            <button 
                onClick={() => props.setValue(0)} 
                className="Button">.
            </button>
            <button 
                onClick={() => (firstNum) ? props.setValue(calculate(firstNum, props.sign, props.value)) : console.log('')} 
                className="Button">=
            </button>
            <button 
                onClick={() => (props.value) ? resetValue("/") : console.log('')}
                className="Button">/
            </button>
        </div>
     );
}
 
export default Button;