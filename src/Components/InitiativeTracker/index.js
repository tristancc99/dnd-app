import React, { useState } from "react";
import InitForm from "./InitForm";
import Trackee from "./Trackee";
// Love that your trying to use this, it's very good practice
import { array } from "prop-types";

function InititativeTracker() {
  let [trackers, setTrackers] = useState([]);

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
    let find = temp.find(trackee => trackee.id === id);
    let index = temp.indexOf(find);
    temp.splice(index, 1);
    setTrackers(temp);
  }

  /* 
    Because of the way that this works 
    (a, b) => ???????
      From W3 Schools
      If the result is negative a is sorted before b.
      If the result is positive b is sorted before a.
      If the result is 0 no changes are done with the sort order of the two values.

    I want b to be first if it has a higher initiative than a.
      Therefore if b.init is < a.init I want a.init to go first. So based off of these rules up top
      I would do b.init - a.init (b = 1, a = 20) result = 19 (a is sorted before b)

    Also as a side note I would consider changing the naming convention of a.init. Init has it's own
    connotation that kind of conflicts with what your trying to say. A lot of time init is short for 
    initialize which is something you have to do to make sure everything works. To avoid problems like
    this I would make it a good practice to overdo it on naming something, eventually you'll find the
    happy medium :)

  */
  return (
    <div>
      <div className="header">Inititative Tracker</div>
      <InitForm data={trackers} create={newTrackee} />
      <hr></hr>
      <ul>
        {trackers.sort((a, b) => b.init - a.init).map(tracke => {
          return (
            <Trackee remove={removeTrackee} key={tracke.id} data={tracke} />
          );
        })}
      </ul>
    </div>
  );
}

export default InititativeTracker;
