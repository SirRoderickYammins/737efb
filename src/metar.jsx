import React, { useState } from "react";
import { Metar } from "@flybywiresim/api-client";

function MetarAcquisition() {
  Metar.get("KBWI", "vatsim")
    .then((data) => {
      console.log(data.metar);
    })
    .catch((err) => {
      console.error(err);
    });
}

function GetMetar() {
  MetarAcquisition();
  return <div className="metar"></div>;
}

export default GetMetar;
