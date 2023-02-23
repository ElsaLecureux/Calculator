import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

//TODO CSS when too big?, no more than one operator look into
function App() {
  const [number,setNumber] = useState('');
  const [screenValue, setScreenValue] = useState('');
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  //const[smaller, setSmaller] = useState(false);
  
    const addSign = (value) => {
      if(operator === ''){
        setNumber('');
        setOperator(value)
        setScreenValue(screenValue + value);
      } else {
        alert('only one operator');
      }
  }
  const addNumber = (value) => {
    if (operator === '' && number.length < 7 ) {
        setFirstNumber(Number(firstNumber + value));
        setNumber(number + value);
        setScreenValue(screenValue + value);
    } else if (number.length < 7) {      
      setSecondNumber(Number(secondNumber + value));
      setNumber(number + value);
      setScreenValue(screenValue + value);
    }
  }
  const calculation = (value) => {
    setScreenValue(screenValue + value);
    const calc = operator;
    let result = 0;
    switch(calc) {
      case '+':
        result = firstNumber + secondNumber;
        //console.log('result', result)
        //console.log('firstNumber', firstNumber)
        //console.log('secondNumber', secondNumber)
        setNumber(result);
        break;
      case '-':
        //console.log('-');
        result = firstNumber - secondNumber;
        setNumber(result);
        break;
      case 'X':
        //console.log('X');
        result = firstNumber * secondNumber;
        setNumber(result);
        /*if(number.length > 8) {
          setSmaller(true);
        }*/
        break;
      case '/':
        //console.log('/');
        result = firstNumber / secondNumber;
        setNumber(result);
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
  }
  return (
    <div className="App">
     <div className='calculator'>
        <div className="screen">
        <p className="screen_content_top">{screenValue}</p>
        <p className={classNames("screen_content_bottom",/*{smaller}*/)}>{number}</p>
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
