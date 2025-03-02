import { useState } from 'react'
import './css/App.css'
import Display from './components/calculator/display'
import Button from './components/calculator/buttons'

function App() {

  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<string>('');

  const handleClick = (value: string) => {
    setInput((prev)=> prev + value);

  }

  const handleOperation = (value: string) => {
    if(input != ''){
      if(operation !== ''){
        calculate();
      }else{
        setResult(parseFloat(input));
      }
      setInput('');
    }else if (value === '=' && operation === '='){
      calculate();
    }
    setOperation(value);
  }

  const calculate = () => {

    const input1 = parseFloat(input);

    let newtotal = result

    if (operation === '=' && input === ''){
      newtotal *= newtotal;
    }else{
      switch(operation){
        case '+':
          newtotal += input1;
          break;
        case '-':
          newtotal -= input1;
          break;
        case '*':
          newtotal *= input1;
          break;
        case '/':
          if(input1 === 0){
            alert('Cannot divide by zero');
            break;
          }else{
            newtotal /= input1;
            break;
          }
        case '%':
          newtotal %= input1;
      }
    }
    
    setResult(newtotal);
    setInput('');
    console.log(newtotal, operation, input, "=", result);
    
  }

  const handleClear = () => {
    setInput('');
    setResult(0);
    setOperation('');
  }


  return (
    <>
      <div>
        <h1>Simple Calculator in React</h1>
      </div>
      <div className='container'>
        <div className="calculator-container">
          <Display value={input || (result !== null ? result.toString() : '')}/>
          <Button 
            onClick={handleClick}
            onClear={handleClear}
            onOperation={handleOperation}
          />
        </div>
      </div>
    </>
  )
}

export default App
