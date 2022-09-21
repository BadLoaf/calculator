import React, { useState } from 'react'
import './Calculator.css';

function Calculator() {
    let [display, setDisplay] = useState('')

    function clearDisplay() {
        setDisplay("")
    }

    function evaluate() {
        setDisplay(
            eval(display)
        )
    }

    function updateCalc(value) {
        const ops = ['+', '-', '*', '/']
        if (
            (ops.includes(value) && ops.includes(display.slice(-1)) )
            ||
            (ops.includes(value) && display === "")
            ) {
            return;
        } else {
            setDisplay(
                display => display + value
            )
        }

    }

    return (
            <div id="centerer">
                <div id='calc'>
                    <div id="display">{display}</div>
                    <button id="clear" onClick={clearDisplay}>CLEAR</button>
                    <button id="=" class="operator"onClick={evaluate}>=</button>
                    <button id="+" class="operator"onClick={() => updateCalc('+')}>+</button>
                    <button id="7" onClick={() => updateCalc('7')}>7</button>
                    <button id="8" onClick={() => updateCalc('8')}>8</button>
                    <button id="9" onClick={() => updateCalc('9')}>9</button>
                    <button id="-" class="operator"onClick={() => updateCalc('-')}>-</button>
                    <button id="4" onClick={() => updateCalc('4')}>4</button>
                    <button id="5" onClick={() => updateCalc('5')}>5</button>
                    <button id="6" onClick={() => updateCalc('6')}>6</button>
                    <button id="X" class="operator"onClick={() => updateCalc('*')}>X</button>
                    <button id="1" onClick={() => updateCalc('1')}>1</button>
                    <button id="2" onClick={() => updateCalc('2')}>2</button>
                    <button id="3" onClick={() => updateCalc('3')}>3</button>
                    <button id="/" class="operator"onClick={() => updateCalc('/')}>/</button>
                </div>
            </div>
        )
    }

export default Calculator