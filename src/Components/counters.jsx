import React from "react";

function CounterComponent({ onDecrement, onDelete, onIncrement, counter }) {
  
  return (
    <div className="m-2">
      <button
        className="btn btn-secondary sm-2"
        onClick={() => onIncrement(counter)}
      >
        +
      </button>
      <button
        className="btn btn-secondary sm-2 ml-1"
        onClick={() => onDecrement(counter)}
      >
        -
      </button>
      <span className={getBadgeClasses()}> Persons {formatCount(counter.value)} </span>
      <button
        className="btn btn-info ml-3"
        onClick={''}
      >
        Edit
      </button>
      

      <button
        className="btn btn-danger ml-2"
        onClick={() => onDelete(counter.id)}
      >
        Delete
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes =
      (counter.value === 0 ? "btn btn-warning ml-1 btn-sm" : "btn btn-primary ml-1 btn-sm");
    return classes;
  }

  function formatCount(number) {
    return number === 0 ? "Zero" : number;
  }
}

export default CounterComponent;
