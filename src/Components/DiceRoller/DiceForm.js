import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// named export (Not default)
import { availableDice } from './constants'

function DiceForm(props) {
  function handleButton(e) {
    let sideCount = e.target.getAttribute("sides");
    let roll =
      Math.floor(Math.random() * (e.target.getAttribute("sides") - 1 + 1)) + 1;
    props.update(sideCount, roll);
  }

  const buttons = availableDice.map(d => <Button sides={d} variant="dark">{d}</Button>)

  return (
    <div className="d-flex flex-column">
      <ButtonGroup onClick={handleButton} size="lg">
        {buttons}
      </ButtonGroup>
    </div>
  );
}

export default DiceForm;
