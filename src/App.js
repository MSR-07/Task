import React, { useState } from "react";
import './App.css';
import Counters from './Components/counter';


const allCounters = [

];

function App() {
  const [counters, setCounters] = useState(allCounters);
  const [items, setItems] = useState(allCounters.length);

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);

    newCounters[index] = { ...counter };
    console.log(newCounters[index]);
    newCounters[index].value++;
    setCounters(newCounters);
  };
  const handleDecrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);

    newCounters[index] = { ...counter };
    console.log(newCounters[index]);
    newCounters[index].value--;
    setCounters(newCounters);
  };
  const handleReset = () => {
    const newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  };

  const handleDelete = (num) => {
    const newCounters = counters.filter((c) => c.id !== num);
    setCounters(newCounters);
  };

  const handleAdd = (counter) => {
    const newCounters = [...counters, { id: items, value: 0 }];
    setCounters(newCounters);
    setItems(items + 1);
  };
 /* const handleEdit = () => {
    this.setState({ editing: true });
  };
  

  
  const handleSave = (e) => {
    e.preventDefault();
    this.props.saveItem(this.props.name, this.refs.editInput.value);
    this.setState({ editing: false });
  }*/
  return (
    <>
      <div>
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
      </div>
    </>
  );
}

export default App;
