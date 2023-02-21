import './App.scss';
import arrow from '../assets/images/arrow.svg';

function App() {

  return (
    <div className="App">
     <div className='calculator'>
        <div className="screen">
          <p className="screen_content">12</p>
        </div>
        <div className="clean_container">
          <button className="cleaning_button">Clear</button>
          <button className="cleaning_button back_button">&lt;</button>
        </div>
        <div className="digits-symbols_container">
          <button className="digits_button">7</button>
          <button className="digits_button">8</button>
          <button className="digits_button">9</button>
          <button className="digits_button">+</button>
          <button className="digits_button">4</button>
          <button className="digits_button">5</button>
          <button className="digits_button">6</button>
          <button className="digits_button">-</button>
          <button className="digits_button">1</button>
          <button className="digits_button">2</button>
          <button className="digits_button">3</button>
          <button className="digits_button multiply_button">X</button>
          <button className="digits_button">0</button>
          <button className="digits_button">.</button>
          <button className="digits_button">&#247;</button>
          <button className="digits_button">=</button>
        </div>      
     </div>
    </div>
  );
}

export default App;
