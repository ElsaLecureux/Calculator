import './App.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

//TODO alert for one operator & only 6digits,
//TODO more than one operator
//TODO button before
//TODO button for '.'
function App() {
  const [number,setNumber] = useState('');
  const [screenValue, setScreenValue] = useState('');
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [smaller, setSmaller] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  
    const addSign = (value) => {
      if(operator === ''){
        setNumber('');
        setOperator(value)
        setScreenValue(screenValue + value);
      } else {
        setAlertOn(true);
      }
  }
  const addNumber = (value) => {
    if (operator === '' && number.length < 6 ) {
        setFirstNumber(Number(firstNumber + value));
        setNumber(number + value);
        setScreenValue(screenValue + value);
    } else if (number.length < 6) {      
      setSecondNumber(Number(secondNumber + value));
      setNumber(number + value);
      setScreenValue(screenValue + value);
    } else {
      setAlertOn(true);
    }
  }
  const calculation = (value) => {
    setScreenValue(screenValue + value);
    let result = 0;
    switch(operator) {
      case '+':
        result = firstNumber + secondNumber;
        setNumber(result.toString());
        break;
      case '-':
        result = firstNumber - secondNumber;
        setNumber(result.toString());
        break;
      case 'X':
        result = firstNumber * secondNumber;
        setNumber(result.toString());
        break;
      case '/':
        result = firstNumber / secondNumber;
        setNumber(result.toString());
        break;
        default:
          console.log('no Math')
    }
  }
  
  const clearAll = () => {
    setScreenValue('');
    setFirstNumber(0);
    setOperator('');
    setSecondNumber(0);
    setNumber('');
    setSmaller(false);
    setAlertOn(false);
  }

  useEffect (() => {
    if(number.length > 8 ) {
      setSmaller(true);
    }
  }, [number]);
  return (
    <div className="App">
    <div className={classNames("alert", {alertOn: alertOn})}>Only one operator || Only 6 digits max</div>
     <div className='calculator'>
        <div className="screen">
          <p className="screen_content_top">{screenValue}</p>
          <p className={classNames("screen_content_bottom", {smaller: smaller})}>{number}</p>
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
          <button value="/" className="digits_button" onClick={e => addSign(e.target.value)}>&#247;</button>
          <button value="=" className="digits_button" onClick={e => calculation(e.target.value)}>=</button>
        </div>      
     </div>
    </div>
  );
}

export default App;
