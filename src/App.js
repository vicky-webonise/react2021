import { Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";

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
import RouteRenderMethod from "./RouteRenderMethod";
import useParamsHooks from "./HooksuseParams";
import useParamsHooksTwo from "./HooksuseParams-twoParam";
import HooksuseLocation from "./HooksuseLocation";
import HooksuseHistory from "./HooksuseHistory";
import LiveSearchFilter from "./LiveSearchFilter";
import WeatherApp from "./WeatherApp";
import ToDoApp from "./ToDoApp";
import ToDoAppAdvance from "./ToDoAppAdvance";
import FilterGallery from "./FilterGallery";

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
              <Route path="/covidUpdate" component={CovidUpdate} />
              <Route path="/weatherApp" component={WeatherApp} />
              <Route path="/todoApp" component={ToDoApp} />
              <Route path="/todoAppAdvance" component={ToDoAppAdvance} />
              <Route path="/filterGallery" component={FilterGallery} />
              <Route path="/" component={Home} exact />
              <Route path="/handlingEvents" component={HandlingEvents} />
              <Route path="/hooks" component={Hooks} />
              <Route path="/form" component={Form} />
              <Route path="/componentExerciser" component={ComponentExercise} />
              <Route path="/netflix" component={Netflix} />
              <Route path="/slotMachineGame" component={SlotMachineGame} />
              <Route path="/simpleCalc" component={SimpleCalc} />
              <Route path="/greeting" component={Greeting} />
              <Route path="/ifElseTernery" component={IfElseTernery} />
              <Route path="/useParamsHooks/:fname" component={useParamsHooks} />
              <Route
                path="/hooksuseLocation/:fname/:lname"
                component={HooksuseLocation}
              />
              <Route
                path="/useParamsHooksTwo/:fname/:lname"
                component={useParamsHooksTwo}
              />
              <Route
                path="/hooksuseHistory/:fname/:lname"
                component={HooksuseHistory}
              />
              <Route path="/liveSearchFilter" component={LiveSearchFilter} />
              {/* Difference between Render and Component Prop */}
              <Route
                path="/routeRenderMethod"
                component={() => (
                  <RouteRenderMethod name="Vicky" surname="Shinde" age="25" />
                )}
              />
              {/* only diff is *component* to *render* */}
              {/* *render* will update the exiting component and *component* will create new every time */}
              {/* <Route
                path="/routeRenderMethod"
                render={() => (
                  <RouteRenderMethod name="Vicky" surname="Shinde" age="25" />
                )}
              /> */}
              {/* <Route component={Error} /> */}
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
