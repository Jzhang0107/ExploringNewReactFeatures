import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) =>
{
  const [count, setCount] = useState(props.count ? props.count : 0);

  const [text, setText] = useState(props.text ? props.text : 'count');
  return(
    <div>
      <p>The current {text} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count ? props.count : 0)}>Reset</button>
      <br />
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

ReactDOM.render(<App count={10} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();