import React from "react";
import Button from "react-bootstrap/Button";

// consider a more precise name like clearDiceStats; readability / grokability is king
function DiceStats({ diceData, clr: clearDiceStats }) {
  // Consider making this state instead ;)
  const modArr = [];
  const rollArr = [];
  let rawTotal = 0;
  let modTotal = 0;

  diceData.forEach(die => {
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
      <Button variant="secondary" onClick={clearDiceStats}>
        Clear All
      </Button>
    </div>
  );
}

export default DiceStats;
