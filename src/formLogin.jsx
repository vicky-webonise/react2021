import { useState } from "react";

const FormLogin = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [onSubmitName, setOnSubmitName] = useState();
  const [onSubmitPass, setOnSubmitPass] = useState();

  const nameInputEvent = (event) => {
    // console.log("Event :");
    // console.log(event);
    // console.log("target :");
    // console.log(event.target);
    // console.log("value : " + event.target.value);
    setName(event.target.value);
  };
  const passInputEvent = (event) => {
    // console.log("Event :");
    // console.log(event);
    // console.log("target :");
    // console.log(event.target);
    // console.log("value : " + event.target.value);
    setPass(event.target.value);
  };

  const showName = (event) => {
    event.preventDefault();
    setOnSubmitName(name);
    setOnSubmitPass(pass);
  };

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={showName}>
        <h2>
          Hello {name} {pass}{" "}
        </h2>
        <h2>
          Hello {onSubmitName} {onSubmitPass}
        </h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={nameInputEvent}
            value={name}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={passInputEvent}
            value={pass}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
