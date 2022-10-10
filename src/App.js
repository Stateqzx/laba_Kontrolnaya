import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  function handeChange(event) {
    let numberCalc = parseInt(event.target.value, 10);
    let stringCalc = [];

    while (numberCalc > 0) {
      if (numberCalc % 2 === 1) {
        stringCalc.push("■");
      } else {
        stringCalc.push("□");
      }

      numberCalc = Math.floor(numberCalc / 2);
    }

    setText(stringCalc.reverse().join(""));
  }

  return (
    <>
      <input type="text" onChange={handeChange} />
      <br />

      {text}
    </>
  );
}
