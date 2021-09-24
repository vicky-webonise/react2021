import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav flex-column nav-pills">
      <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/form">
          Form
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/componentExerciser"
        >
          Component Exerciser
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/covidUpdate"
        >
          Covid Update
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/netflix"
        >
          Netflix
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/handlingEvents"
        >
          Handling Events
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/hooks"
        >
          Hooks
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/slotMachineGame"
        >
          SlotMachineGame
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/simpleCalc"
        >
          Simple Calc
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/greeting"
        >
          Greeting
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          className="nav-link"
          activeClassName="active"
          to="/ifElseTernery"
        >
          If Else Ternery
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
