import './App.scss';
import { useState } from 'react';

function App() {
  const [screenValue, setScreenValue] = useState('');
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  

  const addSign = (value) => {
    setOperator(value)
    setScreenValue(screenValue + value);
  }
  const addNumber = (value) => {
    if (operator === '') {
      setFirstNumber(Number(firstNumber + value));
      console.log(firstNumber);
    } else {
      setSecondNumber(Number(secondNumber + value));
    }
    setScreenValue(screenValue + value);
  }
  const calculation = () => {
    const calc = operator;
    switch(calc) {
      case '+':
        const result = firstNumber + secondNumber;
        setScreenValue(result);
        break;
      case '-':
        console.log('-');
        break;
      case 'X':
        console.log('X');
        break;
      case '&#247;':
        console.log('&#247;');
        break;
        default:
          console.log('no Math')
    }
  }
  const clearAll = () => {
    setScreenValue('');
  }
  return (
    <div className="App">
     <div className='calculator'>
        <div className="screen">
          <p className="screen_content">{screenValue}</p>
        </div>
        <div className="clean_container">
          <button className="cleaning_button" onClick={clearAll}>Clear</button>
          <button className="cleaning_button back_button">&lt;</button>
        </div>
        <div className="digits-symbols_container">
          <button value="7" className="digits_button" onClick={e => addNumber(e.target.value)}>7</button>
          <button value="8" className="digits_button" onClick={e => addNumber(e.target.value)}>8</button>
          <button value="9" className="digits_button" onClick={e => addNumber(e.target.value)}>9</button>
          <button value="+" className="digits_button" onClick={e => addSign(e.target.value)}>+</button>
          <button value="4" className="digits_button" onClick={e => addNumber(e.target.value)}>4</button>
          <button value="5" className="digits_button" onClick={e => addNumber(e.target.value)}>5</button>
          <button value="6" className="digits_button" onClick={e => addNumber(e.target.value)}>6</button>
          <button value="-" className="digits_button" onClick={e => addSign(e.target.value)}>-</button>
          <button value="1" className="digits_button" onClick={e => addNumber(e.target.value)}>1</button>
          <button value="2" className="digits_button" onClick={e => addNumber(e.target.value)}>2</button>
          <button value="3" className="digits_button" onClick={e => addNumber(e.target.value)}>3</button>
          <button value="X" className="digits_button" onClick={e => addSign(e.target.value)}>X</button>
          <button value="0" className="digits_button" onClick={e => addNumber(e.target.value)}>0</button>
          <button value="." className="digits_button" onClick={e => addSign(e.target.value)}>.</button>
          <button value="&#247;" className="digits_button" onClick={e => addSign(e.target.value)}>&#247;</button>
          <button className="digits_button" onClick={calculation}>=</button>
        </div>      
     </div>
    </div>
  );
}

export default App;
