import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import Calculator from "./calculation.jsx";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [wind, newWind] = useState("000/00");
  const [rwyHDG, setRWAYHDG] = useState(0);
  const [isCalculationShown, setCalculationShown] = useState(false);

  const handleCalculation = (e) => {
    e.preventDefault();

    setCalculationShown(true);
  };

  return (
    <Container className="cont-field">
      <div className="info">
        <Stack gap={3}>
          <legend>OAT (°C) </legend>
          <input
            value={temperature}
            onChange={(e) => newTemp(e.target.value)}
          ></input>
          <legend> Take-off Weight (1000s of KGs) </legend>
          <input value={tow} onChange={(e) => newTOW(e.target.value)}></input>
          <legend> Wind (Deg/kn) </legend>
          <input
            value={wind}
            maxLength={6}
            onChange={(e) => newWind(e.target.value)}
          ></input>
          <legend> Runway Heading (Deg)</legend>
          <input
            type="number"
            maxLength={3}
            onChange={(e) => setRWAYHDG(e.target.value)}
          ></input>
          <Button
            disabled={isCalculationShown}
            variant="primary"
            onClick={handleCalculation}
          >
            Calculate
          </Button>
          <Button variant="danger" onClick={() => setCalculationShown(false)}>
            Clear
          </Button>
          {isCalculationShown && (
            <Calculator
              newTemp={temperature}
              newTOW={tow}
              newWind={wind}
              rwyHDG={rwyHDG}
              isCalculationShown={isCalculationShown}
            />
          )}
        </Stack>
      </div>
    </Container>
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
