import './App.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
//TODO to many digits when . is used and results can be too long for the screen! find a solution

//Choose the type of operation to make depending of the operator used
const calculation = (value1, value2, operator) => {
  let result = 0;
  switch(operator) {
    case '+':
      result = Number(value1) + Number(value2);
      break;
    case '-':
      result = Number(value1) - Number(value2);
      break;
    case 'X':
      result = Number(value1) * Number(value2);
      break;
    case '/':
      result = Number(value1) / Number(value2);
      break;
      default:
        console.log(result);
        console.log('no Math')
  }
  return result;
}
//numbers = [2, 5, 3] operators = [+, -]
function calculateValue(numbers = [], operators = []) {
  if (!numbers.length) {
    return "";
  }

  if (!operators.length) {
    return numbers[0];
  }
  
  const finalTotal = operators.reduce((total, operator, index) => {
    const nextNumber = numbers[index + 1];

    if (!nextNumber) {
      return total;
    }
    
    return calculation(total, nextNumber, operator);
  }, numbers[0]);

  return finalTotal.toString();
}

function App() {
  const [numberOnScreen,setNumberOnScreen] = useState('');
  //const [calculus, setCalculus] = useState('');
  const [operators, setOperators] = useState([]);
  const [numbers, setNumbers] = useState([]);
  //const [smaller, setSmaller] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  // const numberOnScreen = calculateValue(numbers, operators);
  const smaller = numberOnScreen.length > 8;
  
  // numbers = [2, 5, 3], operators = [+, -]
  // round 0: totalString = "", num = 2, index = 0, operator = +
  // round 1: totalString = "2 + ", num = 5, index = 1
  // round 2: totalString = "2 + 5 - ", num = 3, index = 2
  // final result for calculus = "2 + 5 - 3"
  const calculus = numbers.reduce((totalString, num, index) => {
    const operator = operators[index];
    if (!num.length) {
      totalString = "";
    }
    if (!operator) {
      totalString = totalString + " " + num;
    } else {
      totalString = totalString + " " + num + " " + operator;
    }

      return totalString;
  }, "");
  
    const addSign = (value) => {
     /* if(operators.length === 0){
        setNumberOnScreen('');
        setOperators([...operators, value])
        setCalculus(calculus + value);
      } else {
        setAlertOn(true);
      }*/
      if (operators.length < numbers.length) {
        setOperators(prevOperators => [...prevOperators, value]);
      }
      if (operators.length === numbers.length && numbers.length) {
        setOperators(prevOperators => [...prevOperators.slice(0, prevOperators.length - 1), value]);
      }
    }
  const addNumber = (value) => {    
   // if ( operators.length === 0 && numberOnScreen.length < 6 ) {
    if (numbers.length === operators.length) {
      setNumbers(prevNumbers => [...prevNumbers, value]);
    }
    if (numbers.length > operators.length) {
      setNumbers(prevNumbers => {
        const lastNum = prevNumbers[prevNumbers.length - 1];
        return [...prevNumbers.slice(0, prevNumbers.length - 1), lastNum + value];
      });
    }
        //setNumberOnScreen(numberOnScreen + value);
        //setCalculus(calculus + value);
   /* } else if (operators.length >= 1 && numberOnScreen.length < 6) {
      let newNumber = [...numbers + numbers[operators.lenght] + value]
      setNumbers(newNumber);
      setNumberOnScreen(numberOnScreen + value);
      setCalculus(calculus + value);
    } else {
      setAlertOn(true);
      setTimeout(() => {
        setAlertOn(false);
      }, 3000);
    }*/
  }

  const calculation = () => {
    setNumberOnScreen(calculateValue(numbers, operators));
  }
  // const calculation = (value) => {
  //   setCalculus(calculus + value);
  //   let result = 0;
  //   switch(operators[0]) {
  //     case '+':
  //       result = Number(numbers[0]) + Number(numbers[1]);
  //       setNumberOnScreen(result.toString());
  //       break;
  //     case '-':
  //       result = Number(numbers[0]) - Number(numbers[1]);
  //       setNumberOnScreen(result.toString());
  //       break;
  //     case 'X':
  //       result = Number(numbers[0]) * Number(numbers[1]);
  //       setNumberOnScreen(result.toString());
  //       break;
  //     case '/':
  //       result = Number(numbers[0]) / Number(numbers[1]);
  //       setNumberOnScreen(result.toString());
  //       break;
  //       default:
  //         console.log(result);
  //         console.log('no Math')
  //   }
  // }
  
  const clearAll = () => {
    // setCalculus('');
    setNumbers([]);
    setOperators([]);
    setNumberOnScreen('');
    //setSmaller(false);
    setAlertOn(false);
  }

  const back = () => {
    if (operators.length < numbers.length) {
      //think about 2 digits
      setNumbers(prevNumbers => {
        const lastNum = prevNumbers[prevNumbers.length - 1];
        if (lastNum.length === 1) {
          return [...prevNumbers.slice(0, prevNumbers.length - 1)]
        }

        const updatedLastNum = lastNum.slice(0, lastNum.length - 1);
        return [...prevNumbers.slice(0, prevNumbers.length - 1), updatedLastNum];
      })
    }
    if (operators.length === numbers.length) { 
      setOperators(prevOperators => { return [...prevOperators.slice(0, prevOperators.length - 1)]})
    }
  }

  /*useEffect (() => {
    if(numberOnScreen.length > 8 ) {
      setSmaller(true);
    }
  }, [numberOnScreen]);*/
  console.log(operators);
  return (
    <div className="App">
    <div className={classNames("alert", {alertOn: alertOn})}>ERROR:Only 6 digits max</div>
     <div className='calculator'>
        <div className="screen">
          <p className="screen_content_top">{calculus}</p>
          <p className={classNames("screen_content_bottom", {smaller: smaller})}>{numberOnScreen}</p>
        </div>
        <div className="clean_container">
          <button className="cleaning_button" onClick={clearAll}>Clear</button>
          <button className="cleaning_button back_button" onClick={back}>&lt;</button>
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
          <button value="." className="operator_button operation_buttons" onClick={e => addNumber(e.target.value)}>.</button>
          <button value="/" className="operator_button operation_buttons" onClick={e => addSign(e.target.value)}>&#247;</button>
          <button value="=" className="operator_button operation_buttons" onClick={e => calculation(e.target.value)}>=</button>
        </div>      
     </div>
    </div>
  );
}

export default App;
