import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Dice(props) {
  // ALWAYS use const when you can. Then you ALWAYS use let. NEVER use var :) (unless you have to use var lol)
  // The reason being is that as a developer I have a strong understanding of the difference
  //  between the two so therefore if you declare a variable as let, I'm more aware of the potential
  //  side effects. If you don't remember the exact differences look it up!
  const data = props.diceData;

  function handleMod(e) {
    props.mod(data.id, e.target.value);
  }

  function handleRem(e) {
    props.rem(data.id);
  }

  function reRoll(e) {
    if (e.target.className == "reRoll") {
      let roll = Math.floor(Math.random() * (data.sides - 1 + 1)) + 1;
      props.re(roll, data.id);
    }
  }

  return (
    <Card bg="dark" text="white" style={{ width: "16rem" }}>
      <Card.Body onClick={reRoll}>
        <Card.Title>
          <h1 className="reRoll">D{data.sides}</h1>
        </Card.Title>
        <Card.Subtitle className="mb-3">
          rolled a <b>{data.roll}</b>
        </Card.Subtitle>
        <input
          onInput={handleMod}
          type="number"
          placeholder="modifier (ex : -2)"
        ></input>
        <Button
          onClick={handleRem}
          style={{ marginLeft: "5px" }}
          variant="danger"
        >
          X
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dice;
