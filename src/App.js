import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className="calculator">
     <div className='output'>
     <div className='previous-output'>123456</div>
     <div className='current-output'>45678</div> 
     </div>
     <button className='span-two' >AC</button>
     <button>DEL</button>
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
     <button className='span-two' >=</button>
    </div>
  );
}

export default App;
