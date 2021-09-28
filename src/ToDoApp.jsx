import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

// to get the data from localstorage

const getLocalItems = () => {
  let list = localStorage.getItem("todoList");
  console.log(list);

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const ToDoApp = () => {
  const [inputData, setInputData] = useState("");

  const [items, setItems] = useState(getLocalItems());

  const inputEvent = (event) => {
    console.log(event.target.value);
    setInputData(event.target.value);
  };

  const addItem = () => {
    if (!inputData) {
      alert("please add item");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((item, index) => {
      return index !== id;
    });

    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  //  add data to localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <h1>ToDo App</h1>
      <div className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Items..."
            onChange={inputEvent}
            value={inputData}
          />
        </div>
        <button className="btn btn-primary mb-2" onClick={addItem}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li key={index} className="">
              {item}
              <span onClick={() => deleteItem(index)} className="">
                Deleted
              </span>
            </li>
          );
        })}
        {/* {items.map = (item, index)=> {
        }} */}
      </ul>
      <button className="btn btn-primary mb-2" onClick={removeAll}>
        Delete All
      </button>
      <hr />
      <NavLink
        exact
        className="nav-link"
        activeClassName="active"
        to="/todoAppAdvance"
      >
        To Do App Advance - Edit, Update
      </NavLink>
    </>
  );
};

export default ToDoApp;
