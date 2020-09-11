import React from "react";

export default function DisplayDay(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wenesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.day.getDay()];
  return <div>{day}</div>;
}
