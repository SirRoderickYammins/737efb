import { Metar } from "@flybywiresim/api-client";
import React, { useState } from "react";

function MetarImport() {
  Metar.get("KBWI", "vatsim")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function GetMetar() {
  MetarImport();
  return <div className="metar"></div>;
}

export default GetMetar;
