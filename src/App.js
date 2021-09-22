import './App.css';
import ComponentExercise from './component-exercise';
import CovidUpdate from './covid-update';
import {add, sub, mult, div } from './calc';
import Netflix from './netflix';
import SlotMachineGame from "./SlotMachineGame";


const TernaryComponent1 = function () {
  return <h1>If</h1>
}
const TernaryComponent2 = function () {
  return <h1>else</h1>
}

function App() {
  const fname = "Vicky";
  const lname = "Shinde";
  const img1 = "https://picsum.photos/200/100";
  const link = "http://google.com"

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const styleObj = {
    color: 'blue',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  };

  // let greetTime = new Date(yyyy,mm,dd,Hr);
  // let greetTime = new Date(2021, 9, 14, 20);
  let greetTime = new Date();
  greetTime = greetTime.getHours();

  let greeting = '';
  const greetStyle = {}

  if(greetTime >= 1 && greetTime < 12) {
    greeting = 'Good Morning !';
    greetStyle.color = 'green';
  } else if (greetTime >= 12 && greetTime < 19) {
    greeting = 'Good Afternoon !';
    greetStyle.color = 'blue';
  } else {
    greeting = "good night !"
    greetStyle.color = "red"
  }

  return (
    <>
      <div className="section">
        <p contentEditable="true">
          My name is {fname} {lname}
        </p>
        <p style={{ color: "red", textTransform: "uppercase" }}>
          My name is {fname + " " + lname}{" "}
        </p>
        <p style={styleObj}>My name is {`${fname} ${lname}`} </p>
      </div>
      <div className="section">
        <p>Current Date is = {currDate}</p>
        <p>Current Time is = {currTime}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img1} alt="Alt Tag" />
        </a>
        <h1>
          Hello Friend, <span style={greetStyle}>{greeting}</span> {greetTime}
        </h1>
      </div>

      <div className="section">
        <ComponentExercise />
      </div>
      <div className="section">
        <CovidUpdate />
      </div>
      <div className="section">
        <h3>Simple calc</h3>
        <ul>
          <li>Sum = {add(10, 20)}</li>
          <li>sub = {sub(10, 20)}</li>
          <li>mult = {mult(10, 20)}</li>
          <li>div = {div(10, 3)}</li>
        </ul>
      </div>
      <div className="section">
        <Netflix />
      </div>
      <div className="section">
        <h3>If Else Statement</h3>
        <h3>React Conditional Rendering | Ternary Operator </h3>
        {true ? "Agreed" : "Disagreed"}
        {false ? <TernaryComponent1 /> : <TernaryComponent2 />}
        {true && <div>true</div>}
        {true && <TernaryComponent1 />}
      </div>
      <div className="section">
        <SlotMachineGame />
      </div>
    </>
  );
}

export default App;
