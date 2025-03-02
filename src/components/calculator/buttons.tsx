

interface ButtonsProps {
    onClick: (value: string) => void;
    onClear: () => void;
    onOperation: (value: string) => void;
}


function Buttons({onClick, onClear, onOperation}: ButtonsProps) {


    return (
        <div className="buttons">
            <button onClick={onClear}>C</button>
            <button onClick={()=>onOperation('%')}>%</button>
            <button onClick={()=>onOperation('/')}>/</button>
            <button onClick={()=>onOperation('*')}>*</button>

            <button onClick={()=>onClick('7')}>7</button>
            <button onClick={()=>onClick('8')}>8</button>
            <button onClick={()=>onClick('9')}>9</button>
            <button onClick={()=>onOperation('-')}>-</button>

            <button onClick={()=>onClick('4')}>4</button>
            <button onClick={()=>onClick('5')}>5</button>
            <button onClick={()=>onClick('6')}>6</button>
            <button className="span-two" onClick={()=>onOperation('+')}>+</button>

            <button onClick={()=>onClick('1')}>1</button>
            <button onClick={()=>onClick('2')}>2</button>
            <button onClick={()=>onClick('3')}>3</button>
            <button onClick={()=>onClick('0')}>0</button>

            <button onClick={()=>onClick('00')}>00</button>
            <button onClick={()=>onClick('.')}>.</button>
            <button onClick={()=>onOperation('=')}>=</button>
        </div>
    )
}

export default Buttons;