import React from "react";

function Trackee(props) {
  let data = props.data;
  let colorType = data.type == "NPC" ? "red" : "green";

  function handleButton(e) {
    props.remove(data.id);
  }

  return (
    <li style={{ color: colorType }}>
      Name : {data.name} || Initiative : {data.init} <input type="text"></input>
      <button onClick={handleButton}>X</button>
    </li>
  );
}

export default Trackee;
