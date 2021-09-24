import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from './Home';
import HandlingEvents from "./handlingEvents";
import Hooks from "./Hooks";
import ComponentExercise from "./component-exercise";
import CovidUpdate from "./covid-update";
import SlotMachineGame from "./SlotMachineGame";
import SimpleCalc from "./SimpleCalc";
import Greeting from "./Greeting";
import Netflix from "./netflix";
import Form from "./form";
import NavBar from "./Navbar";
import Error from "./Error";
import IfElseTernery from "./IfElseTernery";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <NavBar />
        </div>
        <div className="col-10">
          <div className="section">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/handlingEvents" component={HandlingEvents} />
              <Route path="/hooks" component={Hooks} />
              <Route path="/form" component={Form} />
              <Route path="/componentExerciser" component={ComponentExercise} />
              <Route path="/covidUpdate" component={CovidUpdate} />
              <Route path="/netflix" component={Netflix} />
              <Route path="/slotMachineGame" component={SlotMachineGame} />
              <Route path="/simpleCalc" component={SimpleCalc} />
              <Route path="/greeting" component={Greeting} />
              <Route path="/ifElseTernery" component={IfElseTernery} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
