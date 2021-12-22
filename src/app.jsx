import React, { useState } from "react";
import * as ReactDOM from "react-dom";

function WelcomeText() {
  return (
    <div className="welcome-div">
      <h1 className="welcome"> 737 NG Performance Calculator </h1>
    </div>
  );
}

function Calculator(props) {
  return (
    <div>
      <p>temp is {props.newTemp}</p>
      <p>TOW is {props.newTOW}</p>
    </div>
  );
}

function EntryFields() {
  const [temperature, newTemp] = useState(0);
  const [tow, newTOW] = useState(0);
  const [isCalculationShown, setCalculationShown] = useState(false);

  const handleCalculation = (e) => {
    e.preventDefault();

    setCalculationShown(true);
  };

  return (
    <div className="info">
      <legend>OAT (°C) </legend>
      <input
        value={temperature}
        onChange={(e) => newTemp(e.target.value)}
      ></input>
      <legend> Take-off Weight (1000s of KGs) </legend>
      <input value={tow} onChange={(e) => newTOW(e.target.value)}></input>
      <legend> Wind (Deg/kn) </legend>
      <input value={tow}></input>
      <button onClick={handleCalculation}>Calc</button>
      {isCalculationShown && <Calculator newTemp={temperature} newTOW={tow} />}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WelcomeText />
      <EntryFields />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
