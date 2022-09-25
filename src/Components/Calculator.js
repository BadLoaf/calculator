import React, { useState, useEffect } from 'react'
import './Calculator.css';

function Calculator() {
    let [display, setDisplay] = useState('');
    let [toClear, setToClear] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    function detectKeyDown(e) {
        if (/\d|\./.test(e.key)) {
            updateCalc(e.key);
        }
    }

    function clearDisplay() {
        setDisplay("");
    }

    function evaluate() {
        setToClear(true);
        setDisplay(
            eval(display)
        );
    }
    
    function backspace() {
        setDisplay(
            display.slice(0,-1)
        );
    }

    function setNegative() {
        if (display === '') {
            setDisplay('-');
        }
    }

    function updateCalc(value) {
        const ops = ['+', '-', '*', '/', '.']
        if (
            (ops.includes(value) && ops.includes(display.slice(-1)) )
            ||
            (ops.includes(value) && display === "")
            ) {
            return;
        } else {
            if (toClear) {
                setToClear(false);
                setDisplay(
                    ""
                )
            }
            setDisplay(
                display => display + value
            )
        }

    }

    return (
            <div id="centerer">
                <div id='calc'>
                    <div id="display">{display}</div>
                    <button id="clear" className="modifiers"onClick={clearDisplay}>C</button>
                    <button id="negative" className="modifiers"onClick={setNegative}>+/-</button>
                    <button id="back" className="modifiers"onClick={backspace}>B</button>
                    <button id="/" className="operator" onClick={() => updateCalc('/')}>/</button>
                    <button id="7" className="digits" onClick={() => updateCalc('7')}>7</button>
                    <button id="8" className="digits" onClick={() => updateCalc('8')}>8</button>
                    <button id="9" className="digits" onClick={() => updateCalc('9')}>9</button>
                    <button id="x" className="operator" onClick={() => updateCalc('*')}>x</button>
                    <button id="4" className="digits" onClick={() => updateCalc('4')}>4</button>
                    <button id="5" className="digits" onClick={() => updateCalc('5')}>5</button>
                    <button id="6" className="digits" onClick={() => updateCalc('6')}>6</button>
                    <button id="-" className="operator" onClick={() => updateCalc('-')}>-</button>
                    <button id="1" className="digits" onClick={() => updateCalc('1')}>1</button>
                    <button id="2" className="digits" onClick={() => updateCalc('2')}>2</button>
                    <button id="3" className="digits" onClick={() => updateCalc('3')}>3</button>
                    <button id="+" className="operator" onClick={() => updateCalc('+')}>+</button>
                    <button id="zero" className="digits" onClick={() => updateCalc('0')}>0</button>
                    <button id="dot" onClick={() => updateCalc('.')}>.</button>
                    <button id="=" className="operator"onClick={evaluate}>=</button>
                </div>
            </div>
        )
    }

export default Calculator