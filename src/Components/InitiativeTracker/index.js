import React, { useState } from "react";
import InitForm from "./InitForm";
import Trackee from "./Trackee";
import { array } from "prop-types";

function InititativeTracker() {
  let [trackers, setTrackers] = useState([]);

  // Inline this :) 
  function compare(a, b) {
    if (a.init > b.init) return -1;
    if (b.init > a.init) return 1;
  }

  function newTrackee(str, num, ty, tid) {
    let trackee = {
      name: str,
      init: num,
      type: ty,
      id: tid
    };
    setTrackers([...trackers, trackee]);
  }

  function removeTrackee(id) {
    let temp = [...trackers];
    let find = temp.find(trackee => trackee.id == id);
    let index = temp.indexOf(find);
    temp.splice(index, 1);
    setTrackers(temp);
  }

  return (
    <div>
      <div className="header">Inititative Tracker</div>
      <InitForm data={trackers} create={newTrackee} />
      <hr></hr>
      <ul>
        {trackers.sort(compare).map(tracke => {
          return (
            <Trackee remove={removeTrackee} key={tracke.id} data={tracke} />
          );
        })}
      </ul>
    </div>
  );
}

export default InititativeTracker;
