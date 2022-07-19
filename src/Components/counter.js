import React from "react";
import Counter from "./counters";

function Counters({ counters, onIncrement, onDelete, onReset, onAdd, onDecrement }) {  
  return (
    <>
    
        <div className="d-flex bg-light ">
        
          <span className="navbar-brand">
          Enter Task </span>      
                <input className=" m-2" type="text" placeholder="Task Name" ></input>
                    <button 
                    onClick={onAdd}
                    className="btn btn-primary btn-sm m-2" 
                    >
                    Add Task
                    </button>

                    <button onClick={onReset}
                    className="btn btn-danger btn-sm m-2"
                     >
                    Reset Number of Persons
                    </button>
                
            </div>
      
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
      
    </>
  );
}
export default Counters;
