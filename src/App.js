import React, {useState} from 'react';
import './style.css';

export default function App() {
  const [advice, setAdvice] = useState("");

  function getadvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice}>Get advices</button>
    </div>
  );}
