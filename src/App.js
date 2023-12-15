import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [inputText] = useState("Type a number");

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function multiply(e) {
    if (result == Number(0)) {
      setResult((result) => result + Number(1));
    }
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    if (result == Number(0)) {
      setResult((result) => result + Number(inputRef.current.value));
    } else {
      // this will execute when numerator and denominator are both set
      setResult((result) => result / Number(inputRef.current.value));
    }
    e.preventDefault();
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {/* add the value of the current total */}
          <strong> Result: </strong> {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder={inputText}
        />
        <br></br>
        <button onClick={plus}>add</button>
        {/* Add the subtract button */}
        <button onClick={minus}>minus</button>

        {/* Add the multiply button */}
        <button onClick={multiply}>multiply</button>

        {/* Add the divide button */}
        <button onClick={divide}>divide</button>
        <br></br>
        {/* Add the resetInput button */}
        <button onClick={resetInput}>reset input</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
