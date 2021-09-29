import { useState } from "react";

const Hooks = () => {

  const [count, setCount] = useState(1);

  // let count = 1;
  const incNum = () => {
    // count = count++;
    // console.log(count++);
    setCount(count + 1);
  }


  let getTime = new Date().toLocaleTimeString();

  const [currTime, setCurrTime] = useState(getTime);

  const updateTime = () => {
    getTime = new Date().toLocaleTimeString();
    setCurrTime(getTime);
  }

  const [digiTime, setDigiTime] = useState(getTime);

  const digitalTime = () => {
    getTime = new Date().toLocaleTimeString();
    setDigiTime(getTime);
  };

  setInterval(digitalTime, 1000);

  return (
    <div>
      <h3>Hooks</h3>
      <h1> {count} </h1>
      <button className="btn btn-warning" onClick={incNum}>
        Click
      </button>
      <hr />
      <h3>Get Time on Refreshing and Clicking Button using useState Hook</h3>
      <h1> {currTime} </h1>
      <button className="btn btn-warning" onClick={updateTime}>
        Click
      </button>
      <hr />
      <h3>Digital Clock </h3>
      <h1> {digiTime} </h1>
    </div>
  );
};

export default Hooks;
