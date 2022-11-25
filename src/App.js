import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className="calculator">
     <div className='output'>
     <div className='previous-output'></div>
     <div className='current-output'></div> 
     </div>
     <button className='button' >AC</button>
     <button className='button' >+</button>
     <button className='button' >-</button>
     <button className='button' >%</button>
     <button className='button' >1</button>
     <button className='button' >2</button>
     <button className='button' >3</button>
     <button className='button' >4</button>
     <button className='button' >5</button>
     <button className='button' >6</button>
     <button className='button' >7</button>
     <button className='button' >8</button>
     <button className='button' >9</button>
     <button className='button' >0</button>
    </div>
  );
}

export default App;
