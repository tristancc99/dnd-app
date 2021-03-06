import React from "react";
import Button from "react-bootstrap/Button";

function DiceStats(props) {
  let data = props.diceData;
  let modArr = [];
  let rollArr = [];
  let rawTotal = 0;
  let modTotal = 0;

  data.forEach(die => {
    modArr.push(die.modifier);
    modTotal += die.modifier;
    rollArr.push(die.roll);
    rawTotal += die.roll;
  });

  return (
    <div className="diceStats">
      <h3>Results</h3>
      <p>
        (Raw) {rawTotal} ({rollArr.join(" + ")}) + (mod) {modTotal} (
        {modArr.join(" + ")})
      </p>
      <h3>Total is {rawTotal + modTotal}</h3>
      <Button variant="secondary" onClick={props.clr}>
        Clear All
      </Button>
    </div>
  );
}

export default DiceStats;
