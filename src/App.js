import './App.css';
import ComponentExercise from './component-exercise';
import CovidUpdate from './covid-update';

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
      <p contentEditable="true">
        My name is {fname} {lname}
      </p>
      <p style={{ color: "red", textTransform: "uppercase" }}>
        My name is {fname + " " + lname}{" "}
      </p>
      <p style={styleObj}>My name is {`${fname} ${lname}`} </p>
      <p>Current Date is = {currDate}</p>
      <p>Current Time is = {currTime}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img1} alt="Alt Tag" />
      </a>
      <h1>
        Hello Friend, <span style={greetStyle}>{greeting}</span> {greetTime}
      </h1>

      <ComponentExercise />
      <CovidUpdate />
    </>
  );
}

export default App;
