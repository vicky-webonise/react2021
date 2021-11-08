import { useState } from "react";

const HooksComponent = () => {
  const userList = [
    { id: 1, fName: "Vicky", lName: "Shinde", plan: "Free" },
    { id: 2, fName: "Reshma", lName: "Shinde", plan: "Paid" },
    { id: 3, fName: "Sharvari", lName: "Shinde", plan: "Free" },
    { id: 4, fName: "Ayush", lName: "Shinde", plan: "Paid" },
    { id: 5, fName: "Piyush", lName: "Shinde", plan: "Free" },
  ];
  const [users, setUsers] = useState(userList);
  console.log(users);
  const clearAll = () => {
    setUsers([]);
  };

  const removeItem = (id) => {
    // alert(id);
    const updatedUserList = users.filter((item) => {
      return item.id !== id;
    });
    // console.log(updatedUserList);
    setUsers(updatedUserList);
  };

  // spread operator & Handle Objects
  const [myObj, setMyObj] = useState({
    myName: "vicky",
    myAge: 25,
  });

  const updateObj = () => {
    // setMyObj(myObj.myName= "shinde");
    // setMyObj({myName: "shinde"});

    //... copy old object and insert updated value
    setMyObj({ ...myObj, myName: "Shinde" });
  };

  // Short Circuit Evaluation - Logical && and || Operators

  const [shortCircuit] = useState('');

  return (
    <div>
      <h1>Hooks Array</h1>
      {users.map((item) => {
        return (
          <h5 key={item.id}>
            {item.id} Name: {item.fName}, Surname: {item.lName}, Plan
            {item.plan}
            <button
              onClick={() => removeItem(item.id)}
              type="button"
              className="btn btn-warning"
            >
              Remove item
            </button>
          </h5>
        );
      })}
      <button onClick={clearAll} type="button" className="btn btn-warning">
        Clear All
      </button>
      <hr />
      <h1>spread operator {`{...}`} & Handle Objects</h1>
      <h5>
        My Name - {myObj.myName}, My age - {myObj.myAge}{" "}
      </h5>
      <button onClick={updateObj} type="button" className="btn btn-warning">
        Update My Name
      </button>
      <hr />
      <h1>Short Circuit Evaluation - Logical && and || Operators</h1>
      <p>OR - {shortCircuit || "Vicky"}</p>
      <p>&& - {shortCircuit && "Vicky"}</p>
    </div>
  );
}

export default HooksComponent;
