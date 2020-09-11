import React from "react";

export default function DisplayTime(props) {
  let hour = props.time.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.time.getMinutes();
  if (minute < 10) {
    minute = `0 ${minute}`;
  }
  return (
    <div>
      {hour} : {minute}
    </div>
  );
}
