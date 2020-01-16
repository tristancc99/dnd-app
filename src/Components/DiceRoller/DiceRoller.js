import React, { useState } from "react";
import DiceForm from "./DiceForm";
import Dice from "./Dice";
import DiceStats from "./DiceStats";

function DiceRoller() {
  let [dice, setDice] = useState([]);

  function updateDice(diceData, rollData) {
    let newDice = {
      sides: diceData,
      roll: rollData,
      modifier: 0,
      id: dice.length + 1
    };
    setDice([...dice, newDice]);
  }
  function updateModifier(diceId, val) {
    let temp = [...dice];
    let match = temp.find(tempDie => tempDie.id == diceId);
    match.modifier = Number(val);
    setDice([...temp]);
  }

  function removeDice(diceId) {
    let temp = [...dice];
    let match = temp.find(tempDie => tempDie.id == diceId);
    let remId = temp.indexOf(match);
    temp.splice(remId, 1);
    setDice([...temp]);
  }
  console.log(dice);
  return (
    <div>
      <div className="header">Dice Roller</div>
      <DiceForm update={updateDice} />
      <div className="cardcontainer">
        {dice.map(die => {
          return (
            <Dice
              rem={removeDice}
              mod={updateModifier}
              diceData={die}
              key={die.id}
            />
          );
        })}
      </div>
      <DiceStats diceData={dice} />
    </div>
  );
}

export default DiceRoller;
