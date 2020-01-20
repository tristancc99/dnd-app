import React from "react";

function Trackee(props) {
  let data = props.data;
  // === is better than ==
  let colorType = data.type === "NPC" ? "red" : "green";

  function handleButton(e) {
    props.remove(data.id);
  }

  // Don't be a heathen indentation is important :). 
  return (
    <li style={{ color: colorType }}>
      <span>Name : {data.name}</span>
      <span>|| Initiative : {data.init} </span>
      <input type="text" placeholder="let's put something meaningful here :)"></input>
      <button onClick={handleButton}>X</button>
    </li>
  );
}

export default Trackee;
