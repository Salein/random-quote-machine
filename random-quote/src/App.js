import React, {useState} from "react";
import "./App.css";


const App = (props) => {

  let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#472E32', '#BDBB99']
  
  const [currentColor, setCurrentColor] = useState(colors[0])

  function btnColor() {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
  }

  const [currentQuote, setCurrentQuote] = useState(props.state[0])

  function btnQuoteClick () {
    setCurrentQuote(props.state[Math.floor(Math.random() * props.state.length)])}

  return (
    <div style={{background: currentColor}} id='background'>
      <div id="quote-box">
        <h1 id='text'>{currentQuote.quotes}</h1>
        <p id='author'>- {currentQuote.authors}</p>
        <div>
        <a href="twitter.com/intent/tweet" target="_blank">
          <button style={{background: currentColor}} id='tweet-quote'>t</button>
          </a>
        <button style={{background: currentColor}} id='new-quote' onClick={ () => {
          btnQuoteClick()
          btnColor()
          }}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
