import React, { useState } from "react";
import { Metar } from "@flybywiresim/api-client";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

function GetMetar() {
  const [icao, newICAO] = useState(0);
  const [metar, newMetar] = useState(0);
  const [shown, isMETARShown] = useState(false);

  const handleMetar = () => {
    isMETARShown(false);
    Metar.get(icao, "vatsim")
      .then((data) => {
        newMetar(data.metar);
        isMETARShown(true);
      })
      .catch(() => {
        newMetar("Error: METAR could not be retrieved");
      });
  };

  return (
    <div className="metar-box">
      <div className="metar-info">
        <h1>Airport METAR Fetch</h1>
        <div className="metar-input-field">
          <legend>ICAO </legend>
          <input onChange={(e) => newICAO(e.target.value)}></input>
        </div>
        <Button className="metar-button" variant="primary" onClick={handleMetar}>
          Fetch METAR
        </Button>
        <Fade 
        in = {shown}
        appear={shown}
        timeout={100000}>
          <div className="metar-post">{metar}</div>
        </Fade>
      </div>
    </div>
  );
}

export default GetMetar;
