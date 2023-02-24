import './App.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
//TODO differents Alerts
//TODO more than one operator
//TODO button before
//TODO button for '.'
function App() {
  const [numberOnScreen,setNumberOnScreen] = useState('');
  const [calculus, setCalculus] = useState('');
  const [operator, setOperator] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [smaller, setSmaller] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  
    const addSign = (value) => {
      if(operator.length === 0){
        setNumberOnScreen('');
        setOperator([...operator, value])
        setCalculus(calculus + value);
      } else {
        setAlertOn(true);
      }
  }
  const addNumber = (value) => {    
    /*if ( operator.length === 0 && numberOnScreen.length < 6 ) {
        setNumbers([numbers + value]);
        setNumberOnScreen(numberOnScreen + value);
        setCalculus(calculus + value);
    } else*/ if (/*operator.length >= 1 &&*/ numberOnScreen.length < 6) {
      let newNumber = numbers.map((num, i) => {
        if ( i === operator.length) {
          return newNumber = [...numbers, num + value];
        } else {
          return newNumber = [
            ...numbers,
          value
          ] 
        }
      })
      console.log(newNumber);    
      setNumbers(newNumber);
      setNumberOnScreen(numberOnScreen + value);
      setCalculus(calculus + value);
    } else {
      setAlertOn(true);
      setTimeout(() => {
        setAlertOn(false);
      }, 3000);
    }
  }
  const calculation = (value) => {
    //TODO if no (find) = then add =
    setCalculus(calculus + value);
    let result = 0;
    switch(operator[0]) {
      case '+':
        result = Number(numbers[0]) + Number(numbers[1]);
        setNumberOnScreen(result.toString());
        break;
      case '-':
        result = Number(numbers[0]) - Number(numbers[1]);
        setNumberOnScreen(result.toString());
        break;
      case 'X':
        result = Number(numbers[0]) * Number(numbers[1]);
        setNumberOnScreen(result.toString());
        break;
      case '/':
        result = Number(numbers[0]) / Number(numbers[1]);
        setNumberOnScreen(result.toString());
        break;
        default:
          console.log(result);
          console.log('no Math')
    }
  }
  
  const clearAll = () => {
    setCalculus('');
    setNumbers([]);
    setOperator([]);
    setNumberOnScreen('');
    setSmaller(false);
    setAlertOn(false);
  }

  useEffect (() => {
    if(numberOnScreen.length > 8 ) {
      setSmaller(true);
    }
  }, [numberOnScreen]);
  return (
    <div className="App">
    <div className={classNames("alert", {alertOn: alertOn})}>ERROR: Only one operator & Only 6 digits max</div>
     <div className='calculator'>
        <div className="screen">
          <p className="screen_content_top">{calculus}</p>
          <p className={classNames("screen_content_bottom", {smaller: smaller})}>{numberOnScreen}</p>
        </div>
        <div className="clean_container">
          <button className="cleaning_button" onClick={clearAll}>Clear</button>
          <button className="cleaning_button back_button">&lt;</button>
        </div>
        <div className="digits-symbols_container">
          <button value="7" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>7</button>
          <button value="8" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>8</button>
          <button value="9" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>9</button>
          <button value="+" className="operator_button operation_buttons" onClick={e => addSign(e.target.value)}>+</button>
          <button value="4" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>4</button>
          <button value="5" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>5</button>
          <button value="6" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>6</button>
          <button value="-" className="operator_button operation_buttons" onClick={e => addSign(e.target.value)}>-</button>
          <button value="1" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>1</button>
          <button value="2" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>2</button>
          <button value="3" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>3</button>
          <button value="X" className="operator_button operation_buttons" onClick={e => addSign(e.target.value)}>X</button>
          <button value="0" className="digits_button operation_buttons" onClick={e => addNumber(e.target.value)}>0</button>
          <button value="." className="operator_button operation_buttons" onClick={e => addSign(e.target.value)}>.</button>
          <button value="/" className="operator_button operation_buttons" onClick={e => addSign(e.target.value)}>&#247;</button>
          <button value="=" className="operator_button operation_buttons" onClick={e => calculation(e.target.value)}>=</button>
        </div>      
     </div>
    </div>
  );
}

export default App;
