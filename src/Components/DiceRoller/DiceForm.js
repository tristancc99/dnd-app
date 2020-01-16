import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function DiceForm(props) {
  function handleButton(e) {
    let sideCount = e.target.getAttribute("sides");
    let roll =
      Math.floor(Math.random() * (e.target.getAttribute("sides") - 1 + 1)) + 1;
    props.update(sideCount, roll);
  }

  return (
    <div className="d-flex flex-column">
      <ButtonGroup onClick={handleButton} size="lg">
        <Button sides="20" variant="dark">
          20
        </Button>
        <Button sides="12" variant="dark">
          12
        </Button>
        <Button sides="10" variant="dark">
          10
        </Button>
        <Button sides="8" variant="dark">
          8
        </Button>
        <Button sides="6" variant="dark">
          6
        </Button>
        <Button sides="4" variant="dark">
          4
        </Button>
        <Button sides="2" variant="dark">
          2
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DiceForm;
