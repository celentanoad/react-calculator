import React from 'react';
import './Button.css';

const Button = (props) => {

    // function resetValue(sign) {
    //     props.firstNum = props.value;
    //     console.log(props.firstNum);
    //     props.setValue1(0);
    //     props.setValue2(0);
    //     props.setSign(sign)
    // }

    function determineValuePlacement(num) {
        if (!props.sign) {
            (!props.value1) ? props.setValue1(num) : props.setValue1(`${props.value1}${num}`);
            props.setResult(props.value1)
        } else {
            (!props.value2) ? props.setValue2(num) : props.setValue2(`${props.value2}${num}`);
            props.setResult(props.value2);
        }
    }

    function calculate(num1, sign, num2) {
        if (sign === "-") {
            return props.setResult(props.value1 - props.value2);
        } else if (sign === "x") {
            return props.setResult(props.value1 * props.value2);
        } else if (sign === "/") {
            return props.setResult(props.value1 / props.value2);
        } else {
            if (sign) return props.setResult(props.value1 + props.value2);
        }
    }

    return ( 
        <div>
            <button 
                onClick={() => determineValuePlacement(7)}
                className="Button">7
            </button>
            <button 
                onClick={() => determineValuePlacement(8)}
                className="Button">8
            </button>
            <button 
                onClick={() => determineValuePlacement(9)}
                className="Button">9
            </button>
            <button 
                onClick={() => !props.sign ? props.setSign("x") : console.log('err')} 
                className="Button">x
            </button>
            <button 
                onClick={() => determineValuePlacement(4)}
                className="Button">4
            </button>
            <button 
                onClick={() => determineValuePlacement(5)} 
                className="Button">5
            </button>
            <button 
                onClick={() => determineValuePlacement(6)}
                className="Button">6
            </button>
            <button 
                onClick={() => (props.value1) ? props.setSign("-") : console.log('err')} 
                className="Button">-
            </button>
            <button 
                onClick={() => determineValuePlacement(1)}
                className="Button">1
            </button>
            <button 
                onClick={() => determineValuePlacement(2)}
                className="Button">2
            </button>
            <button 
                onClick={() => determineValuePlacement(3)}
                className="Button">3
            </button>
            <button 
                onClick={() => (props.value1) ? props.setSign("+") : console.log('err')}
                className="Button">+
            </button>
            <button 
                onClick={() => determineValuePlacement(0)}
                className="Button">0
            </button>
            <button 
                onClick={() => determineValuePlacement('.')} 
                className="Button">.
            </button>
            <button 
                onClick={() => calculate(props.value1, props.sign, props.value2)} 
                className="Button">=
            </button>
            <button 
                onClick={() => (props.value1) ? props.setSign("/") : console.log('err')}
                className="Button">/
            </button>
        </div>
     );
}
 
export default Button;