import React, { useState } from "react";

function DegToRad(angle) {
  return angle * (Math.PI / 180);
}

function WindComponentCalc(windHeading, rnwyHeading, windSpeed) {
  const deltaTheta = rnwyHeading - windHeading;
  let windComponent = 0;

  if (deltaTheta == 90 || deltaTheta == 270) {
    windComponent = 0;
  }

  if (deltaTheta == 0) {
    windComponent = windSpeed;
  }

  if (deltaTheta == 180) {
    windComponent = -windSpeed;
  }

  if (deltaTheta < 180 && deltaTheta > 90) {
    let theta = DegToRad(180 - deltaTheta);
    windComponent = -(Math.cos(theta) * windSpeed);
  }

  if (deltaTheta > 180 && deltaTheta < 270) {
    let theta = DegToRad(deltaTheta - 180);
    windComponent = -(Math.cos(theta) * windSpeed);
  }

  if (deltaTheta < 90 || deltaTheta > 270) {
    let theta = DegToRad(deltaTheta);
    windComponent = Math.cos(theta) * windSpeed;
  }

  return windComponent;
}

function Calculator(props) {
  const hdgandwind = props.newWind.split("/");
  var hdg = parseInt(hdgandwind[0]);
  var windSpeed = parseInt(hdgandwind[1]);
  const rwyHDG = parseInt(props.rwyHDG);

  const windComponent = WindComponentCalc(hdg, rwyHDG, windSpeed).toFixed(2);

  if (hdg > 360 || hdg < 0) {
    hdg = "ERR: Heading cannot be greater than 360 or less than 0.";
  }

  return (
    <div>
      <p>temp is {props.newTemp}</p>
      <p>TOW is {props.newTOW}</p>
      <p> HDG is {hdg}</p>
      <p>Wind is {windSpeed}</p>
      <p> Wind component is {windComponent} knots</p>
    </div>
  );
}

export default Calculator;
