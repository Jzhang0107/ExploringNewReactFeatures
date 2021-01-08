import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = () =>
{
  const [count, setCount] = useState(10);

  const increment = () =>
  {
    setCount(count + 1);
  }

  return(
    <div>
      <h1>Regina is cute!</h1>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1 Increment</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();