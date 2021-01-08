import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) =>
{
  const [count, setCount] = useState(props.count ? props.count : 0);

  const increment = () =>
  {
    setCount(count + 1);
  }
  const decrement = () =>
  {
    setCount(count - 1);
  }
  const reset = () =>
  {
    setCount(props.count ? props.count : 0);
  }

  return(
    <div>
      <h1>Regina is cute</h1>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

ReactDOM.render(<App count={10} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();