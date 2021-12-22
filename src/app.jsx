import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import Calculator from "./calculation.jsx";

function WelcomeText() {
  return (
    <div className="welcome-div">
      <h1 className="welcome"> 737 NG Performance Calculator </h1>
    </div>
  );
}

function EntryFields() {
  const [temperature, newTemp] = useState(0);
  const [tow, newTOW] = useState(0);
  const [wind, newWind] = useState(0);
  const [rwyHDG, setRWAYHDG] = useState(0);
  const [isCalculationShown, setCalculationShown] = useState(false);

  const handleCalculation = (e) => {
    e.preventDefault();

    setCalculationShown(true);
  };

  return (
    <div className="info">
      <legend>OAT (°C) </legend>
      <input onChange={(e) => newTemp(e.target.value)}></input>
      <legend> Take-off Weight (1000s of KGs) </legend>
      <input onChange={(e) => newTOW(e.target.value)}></input>
      <legend> Wind (Deg/kn) </legend>
      <input onChange={(e) => newWind(e.target.value)}></input>
      <legend> Runway Heading (Deg)</legend>
      <input onChange={(e) => setRWAYHDG(e.target.value)}></input>
      <button onClick={handleCalculation}>Calc</button>
      {isCalculationShown && (
        <Calculator
          newTemp={temperature}
          newTOW={tow}
          newWind={wind}
          rwyHDG={rwyHDG}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <WelcomeText />
      <EntryFields />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
